import express from "express";
import { cartModel } from "../models/cart.js";

const cartRouter = express.Router();

cartRouter.post("/", async (req, res) => {
  // const token = req.cookies.jwtToken;
  // if (!token) return res.status(401).json({ error: "Not authenticated" });
  try {
    const { userID, name, price, image, category, discount, quantity } =
      req.body;

    const newProduct = {
      userID,
      name,
      price,
      image,
      category,
      discount,
      quantity,
    };
    let cart = await cartModel.findOne({ userID });
    if (!cart) {
      cart = new cartModel({
        userID,
        products: [newProduct],
      });
    } else {
      const ifProductExists = cart.products.find((prod) => prod.name === name);
      if (ifProductExists) {
        ifProductExists.quantity += 1;
      } else {
        cart.products.push(newProduct);
      }
    }
    await cart.save();
    return res.status(201).json({ cart });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
});

cartRouter.get("/", async (req, res) => {
  const { userID } = req.query;
  // console.log(userID);
  try {
    const productCart = await cartModel.findOne({ userID });
    if (!productCart) {
      return res.status(404).json({ message: "Cart for the user not found" });
    }
    return res.status(200).json(productCart);
  } catch (error) {
    console.log(error.message);
    return res.status(404).json({ message: "Cart for the user not found" });
  }
});

cartRouter.put("/", async (req, res) => {
  try {
    const { userID, productID, action } = req.body;
    const cart = await cartModel.findOne({ userID });
    if (!cart) {
      return res.status(404).json("Cart not found for specified user!");
    }
    const prodIndex = cart.products.findIndex(
      (prod) => prod._id.toString() === productID
    );
    if (prodIndex === -1) {
      return res.status(404).json("Products not found for specified user!");
    }
    if (action === "increment") {
      cart.products[prodIndex].quantity += 1;
    } else if (action === "decrement") {
      if (cart.products[prodIndex].quantity == 1) {
        cart.products.splice(prodIndex, 0);
      }
      cart.products[prodIndex].quantity -= 1;
    }
    await cart.save();
    return res.status(200).json({ cart });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
});

export default cartRouter;
