import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";
import cartRouter from "./routes/cart.js";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/user", userRouter);
app.use("/cart", cartRouter);

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODBURL);
    console.log("Successfully connected to database");
  } catch (error) {
    console.error(error.message);
  }
  app.listen(process.env.PORT, () => {
    console.log(`Successfully connected to PORT ${process.env.PORT}`);
  });
};

connectToDatabase();
