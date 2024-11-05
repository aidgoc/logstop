const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/db');  // Changed variable name here

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
(async () => {
  try {
    await dbConnect();  // Changed to use the new variable name
  } catch (err) {
    console.error('Failed to connect to database:', err);
    process.exit(1);
  }
})();

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'ERP API is running' });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});