const express = require('express');
const router = express.Router();
const { registerUser,loginUser,forgotPassword } = require('../../controllers/user/Authentification/userController');

// Signup route
router.post('/signup', registerUser);
router.post('/login', loginUser);
router.post('/forgot-password', forgotPassword);

module.exports = router;
