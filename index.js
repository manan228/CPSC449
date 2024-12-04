import express from "express";
import { mongoose } from "mongoose";
import userRoute from "./routes/user.route.js";

import "dotenv/config";

const app = express();

app.use(express.json());
app.use("/user", userRoute)

const mongoConnect = async () => {
  await mongoose.connect("mongodb+srv://manan228:YGY5nuot8BwUEDlL@cluster0.uxepv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
  console.log(`DB connected`);
};

mongoConnect();

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
