import { Router } from "express";
import User from "../model/user.js";
import {
  getUserData,
  login,
  signup,
  updateUser,
} from "../controller/user.controller.js";
import checkUser from "../middleware/checkuser.middleware.js";
import authenticate from "../middleware/authenticate.middleware.js";

const userRoute = Router();

userRoute.get("/get-user/:id", checkUser, getUserData);
userRoute.post("/signup", signup);
userRoute.put("/update-user/:email", authenticate, updateUser);
userRoute.post("/login", login)

export default userRoute;
