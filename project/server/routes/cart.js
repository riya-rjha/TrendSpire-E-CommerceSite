import express from "express";
import { cartModel } from "../models/cart.js";

const cartRouter = express.Router();

cartRouter.post("/", async (req, res) => {
  //   const token = req.cookies.jwtToken;
  //   if (!token) return res.status(401).json({ error: "Not authenticated" });
  try {
    const { username, name, price, image, category } = req.body;

    const newProduct = { username, name, price, image, category };

    let cart = await cartModel.findOne({ username });
    if (!cart) {
      cart = new cartModel({
        username,
        products: [newProduct],
      });
    } else {
      cart.products.push(newProduct);
    }

    await cart.save();

    return res.status(201).json({ cart });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
});

export default cartRouter;
