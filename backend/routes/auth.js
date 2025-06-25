const express = require('express');
const router = express.Router();
const User = require('../models/User');

  // register
router.post('/register', async (req, res) => {
  console.log('Received request:', req.body);  //
  const { username, email, password } = req.body;
  try {
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.json({ message: 'User registered' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

   // login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });
    res.json({ message: 'Login success' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
