import {
  createUserRequest,
  getAllUserRequest,
  loginUserRequest,
} from "../controllers/user.controller.js";
import express from "express";
import { userAuth } from "../middlewares/auth.middleWare.js";

const router = express.Router();

router.post("/signup", createUserRequest);
router.get("/users", userAuth, getAllUserRequest);
router.post("/login", loginUserRequest);
router.get("/signup", (req, res) => {
  console.log("what is wrong");
});

export default router;
