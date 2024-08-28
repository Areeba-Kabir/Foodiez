import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import connectDB from "./config/db.js";

const PORT = 4000;
const app = express();

//middleware
app.use(express.json());
//so our backend will be accessed from any frontend
app.use(cors());

//connection with database
connectDB();

app.get("/", (req, res) => {
  res.send("API is working");
});

app.listen(PORT, () => {
  console.log(`server listens on: http://localhost:${PORT} `);
});

