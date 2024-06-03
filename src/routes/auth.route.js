import { createUser } from "../controllers/user.controller.js";
import express from "express";

const router = express.Router();

router.post("/signup", createUser);
router.get("/signup", (req, res) => {
  console.log("what is wrong");
});

export default router;