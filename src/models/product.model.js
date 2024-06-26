import { Schema, model } from "mongoose";

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    storeId: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    images: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

export default model("Product", ProductSchema);
