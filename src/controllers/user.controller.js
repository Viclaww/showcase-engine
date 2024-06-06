import { createUser, getUser, getAllUsers } from "../services/user.service.js";
import {
  comparePassword,
  hashPassword,
  signToken,
} from "../utils/user.util.js";

/**
 * Controller to create a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */

export const createUserRequest = async (req, res) => {
  try {
    // check if user Exist
    let userExist = await getUser(req.body.email);
    if (!userExist) {
      const encryptedDataPassword = await hashPassword(req.body); // Encrypt password
      const user = await createUser(encryptedDataPassword); // create a new user mongoDb
      const token = signToken(data); // create jwt token

      // return successful data
      return res.status(200).json({
        data: {
          email: user.email,
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
        },
        accesstoken: token,
        status: 200,
        message: "User created sucessfully",
      });
    } else {
      // if user already exist
      return res.status(401).json({
        code: 401,
        message: "User already exists, login",
      });
    }
  } catch (error) {
    // server error
    console.log("too bad", error);
    res.status(500).json(error);
  }
};

/**
 * Controller to Log in User
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */

export const loginUserRequest = async (req, res) => {
  try {
    // chce
    let userExist = await getUser(req.body.email);

    if (!userExist) {
      return res.status(400).json({
        message: "User does not Exist! Create Account!",
      });
    } else {
      let token = await signToken(userExist);
      let passwordMatch = await comparePassword(
        userExist.password,
        req.body.password
      );

      if (!passwordMatch) {
        return res.status(400).json({
          message: "Password or Email do not match!",
        });
      } else {
        return res.status(200).json({
          token,
          email: userExist.email,
          username: userExist.username,
          firstName: userExist.firstName,
          lastName: userExist.lastName,
        });
      }
    }
  } catch (error) {}
};

/**
 * Controller to get all users
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */

export const getAllUserRequest = async (req, res, next) => {
  try {
    return res.status(200).json(await getAllUsers());
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};
