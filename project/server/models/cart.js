import mongoose, { Schema } from "mongoose";

const productCartSchema = new Schema({
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
});

const cartSchema = new Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  products: [productCartSchema],
});

export const cartModel = mongoose.model("cart", cartSchema);
