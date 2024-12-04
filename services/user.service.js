import User from "../model/user.js";

export const getUserByemail = async (email) => {
  const user = await User.find({ email });
  return user;
};

export const createNewUser = async (userData) => {
  await User.create(userData);
};

export const findUserAndUpdate = async (userEmail, userUpdatedData) => {
  console.log(`hi`)
  console.log(userEmail, userUpdatedData)
  await User.findOneAndUpdate({ userEmail }, userUpdatedData);
};
