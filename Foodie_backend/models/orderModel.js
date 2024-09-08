import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: { type: Array, required: true },
  amount: { type: Number, required: true },
  address: { type: Object, required: true },
  status: { type: String, required: true },
  date: { type: Boolean, required: true },
});

const orderModel = mongoose.models.orders || mongoose.model("orders", orderSchema);

export default orderModel;