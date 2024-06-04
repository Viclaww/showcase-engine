import { createUserRequest } from "../controllers/user.controller.js";
import express from "express";

const router = express.Router();

router.post("/signup", createUserRequest);
router.get("/signup", (req, res) => {
  console.log("what is wrong");
});

export default router;
