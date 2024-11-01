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
  category: {
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
  favProducts: [favSchemaProducts],
});

export const cartModel = mongoose.model("favs", favSchema);
