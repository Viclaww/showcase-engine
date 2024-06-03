import { Schema, model } from "mongoose";

const StoreModel = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
});

export default model("Store", StoreModel);
