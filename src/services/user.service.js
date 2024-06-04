import User from "../models/user.model.js";

// functiion that find all users
export const getAllUsers = async () => {
  const users = await User.find({});
  return users;
};

// function that finds a user by email
export const getUser = async (email) => {
  const user = await User.findOne({
    email,
  });
  return user;
};

// function that creates a user
export const createUser = async (body) => {
  const user = await User.create(body);
  return user;
};
