const express = require('express');
const router = express.Router();
const { registerUser,loginUser } = require('../../controllers/user/Authentification/userController');

// Signup route
router.post('/signup', registerUser);
router.post('/login', loginUser);

module.exports = router;
