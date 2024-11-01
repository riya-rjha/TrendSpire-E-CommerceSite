import express from "express";
import { favsModel } from "../models/favs.js";

const favsRouter = express.Router();

favsRouter.post("/", async (req, res) => {
  try {
    const { name, userID, price, image, discount } = req.body;
    const favProd = {
      name,
      userID,
      price,
      image,
      discount,
    };
    let favourite = await favsModel.findOne({ userID });
    if (!favourite) {
      favourite = new favsModel({
        userID,
        favourites: [favProd],
      });
    } else {
      favourite.favourites.push(favProd);
    }
    await favourite.save();
    return res.status(201).json({ favourite });
  } catch (error) {
    console.log(error.message);
    return res.status(404).json("Unable to add favourites");
  }
});

favsRouter.get("/", async (req, res) => {
  const { userID } = req.query;
  try {
    const favProduct = await favsModel.findOne({ userID });
    if (!favProduct) {
      return res
        .status(404)
        .json({ message: "Error in recovering favourites for the given user" });
    }
    return res.status(202).json(favProduct);
  } catch (error) {
    console.log(error.message);
    return res.status(404).json({ message: "Favourites do not exist" });
  }
});

export default favsRouter;
