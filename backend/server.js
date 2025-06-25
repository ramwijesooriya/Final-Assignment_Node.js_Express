const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
