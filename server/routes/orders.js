const express = require('express');
const Order = require('../models/Order');
const { auth } = require('../middleware/auth');

const router = express.Router();

// Create a new order (user)
router.post('/', auth, async (req, res) => {
  try {
    const {
      items,
      subtotal,
      tax,
      deliveryFee,
      total,
      paymentMethod = 'cash',
      deliveryAddress = {},
      deliveryInstructions = '',
      notes = ''
    } = req.body;

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: 'Order must include at least one item' });
    }

    const normalizedItems = items.map((it) => ({
      menuItem: it.menuItem || undefined,
      name: it.name,
      price: it.price,
      quantity: it.quantity,
      total: it.total ?? (Number(it.price) * Number(it.quantity))
    }));

    const order = new Order({
      user: req.user._id,
      items: normalizedItems,
      subtotal,
      tax,
      deliveryFee,
      total,
      paymentMethod,
      deliveryAddress,
      deliveryInstructions,
      notes
    });

    await order.save();
    const populated = await Order.findById(order._id).populate('user', 'name email phone');

    res.status(201).json({
      message: 'Order placed successfully',
      order: populated
    });
  } catch (error) {
    console.error('Create order error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get current user's orders
router.get('/mine', auth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id })
      .sort({ createdAt: -1 });
    res.json({ orders });
  } catch (error) {
    console.error('Get my orders error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;


