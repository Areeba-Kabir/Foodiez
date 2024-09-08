import userModel from "../models/userModel.js";

const addToCart = async (req, res) => {
  try {
    const id = req.body.userId;
    console.log(id);
    let userData = await userModel.findOne({ _id: id });
    let cartData = await userData.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }
    await userModel.findByIdAndUpdate(id, { cartData });
    res.status(200).json({ success: true, message: "Added to cart" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error" });
  }
};

const removeFromCart = async (req, res) => {
  try {
    let userId = req.body.userId; // Extract userId from req.user set by authMiddleware
    //let itemId = req.body.itemId || req.query.itemId; //if used with post method!
    let itemId = req.params.itemId;
    let userData = await userModel.findById(userId);
    let cartData = await userData.cartData;
    if (cartData[itemId] > 0) {
      cartData[itemId] -= 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res
      .status(200)
      .json({ success: true, message: "item removed successfully" });
  } catch (error) {
    res.status(503).json({ success: false, message: "Error" });
  }
};

const getCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    console.log(cartData);
    res.status(200).json({ success: true,  cartData  });
  } catch (error) {
    res.status(503).json({ success: false, message: "Error" });
  }
};

export { addToCart, removeFromCart, getCart };
