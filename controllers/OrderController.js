import Order from "../models/Order.js";

class OrderController {
  async getAllOrders(req, res) {
    try {
      const orders = await Order.find();
      res.json(orders);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async createOrder(req, res) {
    const order = new Order(req.body);
    try {
      const newOrder = await order.save();
      res.status(201).json(newOrder);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async deleteOrder(req, res) {
    try {
      await Order.findByIdAndRemove(req.params.id);
      res.json({ message: "Order deleted" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

export default new OrderController();
