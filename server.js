const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/billetterie', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection error to MongoDB:', err));

// Basic routes
app.get('/', (req, res) => {
  res.send('Welcome to the Ticket Management API!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});