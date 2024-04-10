import Product from "../models/Product.js";

class ProductController {
  async getAll(req, res) {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async getById(req, res) {
    try {
      const product = await Product.findById(req.params.id);
      res.json(product);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async createProduct(req, res) {
    const product = new Product(req.body);
    try {
      const newProduct = await product.save();
      res.status(201).json(newProduct);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async updateProduct(req, res) {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(updatedProduct);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async deleteProduct(req, res) {
    try {
      await Product.findByIdAndRemove(req.params.id);
      res.json({ message: "Product deleted" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

export default new ProductController();
