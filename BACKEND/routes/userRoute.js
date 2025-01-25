const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/userController');

// Signup route
router.post('/signup', registerUser);

module.exports = router;
