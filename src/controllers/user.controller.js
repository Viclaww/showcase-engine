import { createUser, getUser } from "../services/user.service.js";
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
    let userExist = await getUser(req.body.email);
    if (!userExist) {
      const encryptedDataPassword = await hashPassword(req.body);
      const data = await createUser(encryptedDataPassword);
      const token = signToken(data);
      return res.status(200).json({
        data,
        accesstoken: token,
        status: 200,
        message: "User created sucessfully",
      });
    } else {
      return res.status(401).json({
        code: 401,
        message: "User already exists, login",
      });
    }
  } catch (error) {
    console.log("too bad", error);
    res.status(400).json(error);
  }
};

export const loginUserRequest = async (req, res) => {
  try {
    let userExist = await getUser(req.body.email);
    console.log(userExist);
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
      console.log(passwordMatch);
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
