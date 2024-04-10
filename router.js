import express from "express";
const router = express.Router();

import CategoryController from "./controllers/CategoryController.js";
import OrderController from "./controllers/OrderController.js";
import ProductController from "./controllers/ProductController.js";

// Запросы для категорий
router.get("/category", CategoryController.getAllCategories);
router.post("/category", CategoryController.createCategory);
router.delete("/category/:id", CategoryController.deleteCategory);

// Запросы для товаров
router.get("/product", ProductController.getAll);
router.post("/product", ProductController.createProduct);
router.get("/product/:id", ProductController.getById);
router.put("/product/:id", ProductController.updateProduct);
router.delete("/product/:id", ProductController.deleteProduct);

// Запросы для заказов
router.get("/orders", OrderController.getAllOrders);
router.post("/orders", OrderController.createOrder);
router.delete("/orders/:id", OrderController.deleteOrder);

export default router;
