import mongoose from "mongoose";

const Product = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image_url: { type: String, required: true },
  manufacturer: { type: String, required: true },
  seller: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
});

export default mongoose.model("Product", Product);
