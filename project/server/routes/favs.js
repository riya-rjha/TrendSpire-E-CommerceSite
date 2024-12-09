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
      const isExistsFavProd = favourite.favourites.find(
        (fav) => fav.name === name
      );
      if (!isExistsFavProd) {
        favourite.favourites.push(favProd);
      } else {
        return res.status(302).json("Product is already favourite");
      }
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

favsRouter.delete("/", async (req, res) => {
  try {
    const { userID, productID } = req.body;
    let favProduct = await favsModel.findOne({ userID });
    let favsArr = favProduct.favourites;
    let filteredFavs = favsArr.filter((prod) => prod._id != productID);
    favProduct.favourites = filteredFavs;
    await favProduct.save();
    return res.status(202).json("Successfully deleted particular favourite");
  } catch (error) {
    console.log(error.message);
    return res.status(500).json("Internal Server Error");
  }
});

export default favsRouter;
