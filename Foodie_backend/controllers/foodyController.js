import foodyModel from "../models/foodyModel.js";
import fs from "fs";

const addFood = async (req, res) => {
  try {
    let image_filename = `${req.file.filename}`;
    const food = new foodyModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: image_filename,
    });
    await food.save();
    res.status(201).json({ success: true, message: "Food Added" });
  } catch (error) {
    res.status(401).json({ success: false, message: error.message });
    console.log("error adding food!");
  }
};

const getAllFood = async (req, res) => {
  try {
    const allFood = await foodyModel.find({});
    res.status(201).json({ success: true, data: allFood });
  } catch (error) {
    console.log("error fetching data!");
    res.status(401).json({ success: false, message: error.message });
  }
};

const removeFoodItem = async (req, res) => {
  try {
    const food = await foodyModel.findById(req.params.id);
    fs.unlink(`uploads/${food.image}`, () => {});

    await foodyModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Food item removed" });
  } catch (error) {
    console.log("error removing");
    res.status(404).json({ success: false, message: error.message });
  }
  
};

// const removeFoodItem = async (req, res) => {
//   try {
//     const food = await foodyModel.findById(req.body.id);
//     fs.unlink(`uploads/${food.image}`, () => {});

//     await foodyModel.findByIdAndDelete(req.body.id);
//     res.status(200).json({ success: true, message: "Food item removed" });
//   } catch (error) {
//     console.log('error removing')
//     res.status(404).json({ success: false, message: error.message });
//   }
// };

const updateFoodItem = async (req, res) => {
  try {
    const { id } = req.params;
    const food_item = await foodyModel.findById(id);

    if (!food_item) {
      return res
        .status(404)
        .json({ success: false, message: "Food item not found" });
    }

    let image_filename = req.file ? `${req.file.filename}` : food_item.image;

    if (req.file && image_filename !== food_item.image) {
      fs.unlink(`uploads/${food_item.image}`, (err) => {
        if (err) console.log("Error deleting old image file:", err);
      });
    }

    const updatedData = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: image_filename,
    };

    const updatedItem = await foodyModel.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    res.status(200).json({
      success: true,
      data: updatedItem,
    });
  } catch (error) {
    console.log("Error updating food item:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const getFood = async (req, res) => {
  try {
    const food_item = await foodyModel.findById(req.params.id);
    if (food_item) {
      console.log("data Getted successfully!");
      res.status(201).json({ status: true, data: food_item });
    } else {
      console.log("No item exists with this id.");
      res.json({ success: true, message: "No item exists with this id" });
    }
  } catch (error) {
    console.log("error encountered in getting food item");
    res.status(401).json({ status: false, message: error.message });
  }
};

export { addFood, getAllFood, removeFoodItem, updateFoodItem, getFood };
