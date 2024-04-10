import mongoose from "mongoose";

const Order = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true }, // Ссылка на товар
  quantity: { type: Number, required: true },
});

export default mongoose.model("Order", Order);
("");
