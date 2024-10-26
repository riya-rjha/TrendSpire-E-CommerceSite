import { userModel } from "../models/user.js";
import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import "dotenv/config";

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const ifUserExists = await userModel.findOne({
      $or: [{ username }, { email }],
    });
    if (ifUserExists) {
      return res.status(409).json("User is already registered");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({
      username: username,
      email: email,
      password: hashedPassword,
    });
    await newUser.save();
    return res.json("User creation successful");
  } catch (error) {
    console.log(error.message);
    return res.json("User could not be registered");
  }
});

userRouter.post("/login", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const ifUserExists = await userModel.findOne({
      $or: [{ username }, { email }],
    });
    if (!ifUserExists) {
      return res.status(404).json("User does not exist");
    }
    const checkPassword = await bcrypt.compare(password, ifUserExists.password);
    if (!checkPassword) {
      return res.json(401).json("Incorrect password");
    }
    const signInJWT = jwt.sign(
      { id: ifUserExists._id },
      process.env.SECRET_KEY,
      {
        expiresIn: "24h",
      }
    );
    res.cookie("jwtToken", signInJWT);
    return res.json({
      message: "Successfully logged in",
      username: ifUserExists.username,
      userID: ifUserExists._id.toString()
    });
  } catch (error) {
    console.log(error.message);
    // return res.json("User could not be logged in");
  }
});

userRouter.post("/logout", (_, res) => {
  res.clearCookie("jwtToken");
  return res.status(202).json("User has been successfully logged out");
});

export default userRouter;
