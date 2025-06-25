const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// create
router.post('/', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.json(newProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Read All
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Read One
router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

// Update
router.put('/:id', async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Delete
router.delete('/:id', async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted successfully' });
});

module.exports = router;
