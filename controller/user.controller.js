import User from "../model/user.js";
import bcrypt from "bcrypt";
import {
  createNewUser,
  findUserAndUpdate,
  getUserByemail,
} from "../services/user.service.js";
import jwt from "jsonwebtoken";

export const getUserData = async (req, res) => {
  try {
    // const email = req.params.id;
    // const user = await getUserByemail(email);
    res.status(200).json({ status: "user fetched" });
  } catch (err) {
    console.log(err);
  }
};

export const signup = async (req, res) => {
  try {
    const user = req.body;

    bcrypt.hash(user.password, 10, async (err, hash) => {
      try {
        await createNewUser({ ...user, password: hash });
        res.json({ status: "user added successfully" });
      } catch (err) {
        console.log(err);
      }
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ status: "Something went wrong" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const email = req.params.email;
    const updatedUserData = req.body;
    console.log(updatedUserData, email)

    await findUserAndUpdate(email, updatedUserData);

    res.status(200).json({ status: "User Profile Updated" });
  } catch (err) {
    console.log(err);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const response = await User.find({ email });
    const userPassword = response[0].password;

    bcrypt.compare(password, userPassword, (err, result) => {
      if (err) {
        throw new Error("Something went wrong, try again!!!");
      }

      const token = jwt.sign({ email }, "abc");

      if (result) {
        res.json({ response, token });
      }
    });
  } catch (err) {
    console.log(err);
  }
};
