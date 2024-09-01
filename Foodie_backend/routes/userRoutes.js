import { loginUser, registerUser } from "../controllers/userController.js";
import express from "express";

const userRouter = express.Router();

userRouter.post("/signup", registerUser);

userRouter.post("/login", loginUser);

export default userRouter;
 