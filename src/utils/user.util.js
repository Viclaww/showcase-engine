import { encrypt, verify } from "unixcrypt";
import jwt from "jsonwebtoken";

export const encryptPassword = async (body) => {
  let data = {
    ...body,
    password: await encrypt(body.password, 10),
  };
  return data;
};

export const comparePassword = async (pass1, pass2) => {
  let correct = await verify(pass1, pass2);
  return correct;
};

export const signToken = async (body) => {
  let JWT_SECRET = process.env.JWT_SECRET;
  let token = await jwt.sign(
    {
      email: body.email,
      password: body.password,
    },
    JWT_SECRET,
    {
      expiresIn: "3d",
    }
  );
  return token;
};
