import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectDB = async () => {
  await mongoose
    .connect(process.env.uri)
    .then(() => {
      console.log("connected to database.");
    })
    .catch((err) => {
      console.log(`error connecting to database, error:${err.message}`);
    });
};

export default connectDB;
