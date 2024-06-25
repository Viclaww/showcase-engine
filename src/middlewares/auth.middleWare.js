import jwt from "jsonwebtoken";

/**
 * Middleware to authenticate if user has a valid Authorization token
 * Authorization: Bearer <token>
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export const userAuth = async (req, res, next) => {
  const JWT_SECRET = process.env.JWT_SECRET;
  try {
    let bearerToken = req.header("Authorization").split(" ")[1].trim();

    if (!bearerToken) {
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: "Authorization is required!",
      };
    } else {
      await jwt.verify(bearerToken, JWT_SECRET, (error, decodedToken) => {
        if (error) {
          return res.status(401).json({
            message: "Not authorized or wrong token",
          });
        } else {
          next();
        }
      });
    }
    next();
  } catch (error) {
    next(error);
  }
};
