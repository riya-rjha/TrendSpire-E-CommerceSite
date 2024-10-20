import express from "express";
import { cartModel } from "../models/cart.js";

const cartRouter = express.Router();

cartRouter.post("/", async (req, res) => {
  //   const token = req.cookies.jwtToken;
  //   if (!token) return res.status(401).json({ error: "Not authenticated" });
  try {
    const { userID, name, price, image, category, discount } = req.body;

    const newProduct = { userID, name, price, image, category, discount };

    let cart = await cartModel.findOne({ userID });
    if (!cart) {
      cart = new cartModel({
        userID,
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

cartRouter.get("/", async (req, res) => {
  try {
    const productCart = await cartModel.find({});
    const cartDetails = productCart[0];
    console.log(cartDetails);
    return res.status(200).json(cartDetails);
  } catch (error) {
    console.log(error.message);
    return res.status(404).json({ message: "Cart for the user not found" });
  }
});

export default cartRouter;
