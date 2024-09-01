import express from "express";
import multer from "multer";
import {
  addFood,
  getAllFood,
  removeFoodItem,
  updateFoodItem,
  getFood,
} from "../controllers/foodyController.js";

const foodRouter = express.Router();

//Image Storage engine

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()} ${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

foodRouter.post("/additem", upload.single("image"), addFood);

foodRouter.get("/foodlist", getAllFood);

foodRouter.get("/food/:id", getFood);

foodRouter.patch("/updateitem/:id", upload.single("image"), updateFoodItem);

//router.post("/removeitem", removeFoodItem);

foodRouter.delete("/removeitem/:id", removeFoodItem);

export default foodRouter;
