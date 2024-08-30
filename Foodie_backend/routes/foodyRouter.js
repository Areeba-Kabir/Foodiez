import express from "express";
import multer from "multer";
import {
  addFood,
  getAllFood,
  removeFoodItem,
  updateFoodItem,
  getFood,
} from "../controllers/foodyController.js";

const router = express.Router();

//Image Storage engine

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()} ${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

router.post("/additem", upload.single("image"), addFood);

router.get("/foodlist", getAllFood);

router.get("/food/:id", getFood);

router.patch("/updateitem/:id", upload.single("image"), updateFoodItem);

//router.post("/removeitem", removeFoodItem);

router.delete("/removeitem/:id", removeFoodItem);

export default router;