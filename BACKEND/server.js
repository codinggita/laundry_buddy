const express = require('express');
const connectDB =require('./config/db');
const orderRoutes = require('./routes/orderRoutes')
const cors = require('cors'); // Importing cors

const app = express();
const port = 3000;
app.use(express.json());

// Middleware
app.use(cors()); // Enabling CORS for all routes

// connect to database
connectDB();

app.use('/user',orderRoutes)

app.listen(port, () => {
  console.log(`Server start on http://localhost:${port}`);
});
