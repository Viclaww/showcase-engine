import express from "express";
import database from "./config/mongoose.js";
import routes from "./routes/index.js";
import dotenv from "dotenv";
import { notFound } from "./middlewares/errorMiddleware.js";
dotenv.config();
const app = express();

// app.use(express.json);
// app.use(express.urlencoded({ extended: false }));
database();
// app.use(notFound());

// const host = process.env.APP_HOST;
const port = 2000;
// const api_version = process.env.API_VERSION;
app.get("/", (req, res) => {
  res.send("This is the homeland");
});
app.use(routes());
app.listen(port, () => {
  console.log("Welcome, i am running on", port);
});
