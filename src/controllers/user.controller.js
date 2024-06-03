import { getUser } from "../services/user.service.js";
import { encryptPassword } from "../utils/user.util.js";

/**
 * Controller to create a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */

export const createUser = async (req, res) => {
  try {
    console.log(req);
    let userExist = await getUser(req.body.email);
    if (!userExist) {
      const encryptedDataPassword = encryptPassword(req.body);
      const data = await createUser(encryptedDataPassword);
      return res.status(200).json({
        data,
        status: 200,
        message: "User created sucessfully",
      });
    }
    return res.status(401).json({
      code: 401,
      message: "User already exists, login",
    });
  } catch (error) {
    console.log("too bad", error);
  }
};
