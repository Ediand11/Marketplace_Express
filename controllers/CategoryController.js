import Category from "../models/Category.js";

class CategoryController {
  async getAllCategories(req, res) {
    try {
      const categories = await Category.find();
      res.json(categories);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async createCategory(req, res) {
    const category = new Category(req.body);
    try {
      const newCategory = await category.save();
      res.status(201).json(newCategory);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async deleteCategory(req, res) {
    try {
      await Category.findByIdAndRemove(req.params.id);
      res.json({ message: "Category deleted" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

export default new CategoryController();
