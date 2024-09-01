import { loginUser, registerUser } from "../controllers/userController";
import express from "express";

const userRouter = express.Router();

userRouter.post("/signup", registerUser);

userRouter.get("/login", loginUser);

export default userRouter;
