import express from "express";
import { cartModel } from "../models/cart.js";

const cartRouter = express.Router();

cartRouter.post("/", async (req, res) => {
  //   const token = req.cookies.jwtToken;
  //   if (!token) return res.status(401).json({ error: "Not authenticated" });
  try {
    const { username, name, price, image, category } = req.body;

    const newProduct = { username, name, price, image, category };

    let cart = new cartModel({
      username,
      products: [newProduct],
    });

    await cart.save();

    /*
    {
      "product": {
          "username": "66af7badd6c9a125ae00e48e",
          "name": "jknkwd",
          "price": 231,
          "image": "https://img.freepik.com/premium-photo/beautiful-stylish-woman-sun-glasses-color-wall_534373-20958.jpg?ga=GA1.1.448448890.1721050418&semt=ais_hybrid",
          "category": "woen"
      }
    }
    */

    return res.status(201).json({ product: newProduct });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
});

export default cartRouter;
