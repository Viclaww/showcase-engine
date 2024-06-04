import {
  createUserRequest,
  loginUserRequest,
} from "../controllers/user.controller.js";
import express from "express";

const router = express.Router();

router.post("/signup", createUserRequest);
router.post("/login", loginUserRequest);
router.get("/signup", (req, res) => {
  console.log("what is wrong");
});

export default router;
