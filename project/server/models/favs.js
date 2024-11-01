import mongoose, { Schema } from "mongoose";

const favSchemaProducts = new Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  image: {
    type: String,
  },
  discount: {
    type: Number,
  },
});

const favSchema = new Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  favourites: [favSchemaProducts],
});

export const favsModel = mongoose.model("favs", favSchema);
