import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import foodRouter from "./routes/foodyRouter.js";
import userRouter from "./routes/userRoutes.js";
import cartRouter from "./routes/cartRoutes.js";


const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//so our backend will be accessed from any frontend
app.use(cors());

//connection with database
connectDB();
// food api configuration
app.use("/api/foody", foodRouter);
app.use("/image", express.static("uploads"));

// user api configuration
app.use("/api/user", userRouter);


app.use('/api/cart', cartRouter);

app.get("/", (req, res) => {
  res.send("API is working");
});

app.listen(process.env.PORT, () => {
  console.log(`server listens on: http://localhost:${process.env.PORT} `);
});
