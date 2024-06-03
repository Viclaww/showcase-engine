import mongoose from "mongoose";

const database = async () => {
  try {
    const DATABASE =
      process.env.NODE_ENV === "test"
        ? process.env.MONGODB_URI_TEST
        : process.env.MONGODB_URI;
    await mongoose.connect(DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Hey,I connected to database");
  } catch (error) {
    console.log("Could not connect.", error);
  }
};

export default database;
