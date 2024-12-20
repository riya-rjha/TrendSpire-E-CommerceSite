import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";
import cartRouter from "./routes/cart.js";
import favsRouter from "./routes/favs.js";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: [`${process.env.FRONTEND_URL}`, `${process.env.IP_URL}`],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/user", userRouter);
app.use("/cart", cartRouter);
app.use("/favs", favsRouter);

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODBURL);
    console.log("Successfully connected to database");
  } catch (error) {
    console.error(error.message);
  }
  app.listen(process.env.PORT || 8000, () => {
    console.log(`Successfully connected to PORT ${process.env.PORT}`);
  });
};

connectToDatabase();
