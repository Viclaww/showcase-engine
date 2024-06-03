import express from "express";
import authRouter from "./auth.route.js";
const router = express.Router();

const routes = () => {
  router.get("/", (req, res) => {
    res.json("Welcome");
  });
  router.use("/auth", authRouter);
  return router;
};

export default routes;
