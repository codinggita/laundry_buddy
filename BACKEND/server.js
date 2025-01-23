const express = require('express');
const connectDB =require('./config/db');
const cors = require('cors'); // Importing cors

const app = express();
const port = 3000;

// Middleware
app.use(cors()); // Enabling CORS for all routes

// connect to database
connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server start on http://localhost:${port}`);
});
