import { Schema, model } from "mongoose";

const StoreModel = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    products: [
      {
        tag: Array,
        price: Number,
        name: String,
        description: String,
        available: Boolean,
        quantity: Number,
      },
    ],
    ownerid: {
      type: String,
    },
  },
  { timestamps: true }
);

export default model("Store", StoreModel);
