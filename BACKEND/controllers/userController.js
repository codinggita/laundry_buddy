// controllers/userController.js
const User = require('../models/user'); // Import the user schema

const registerUser = async (req, res) => {
  const { name, email, phoneNumber, buildingName, roomNumber, password, confirmPassword } = req.body;

  // Basic validations
  if (!name || !email || !phoneNumber || !buildingName || !roomNumber || !password || !confirmPassword) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match.' });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email.' });
    }

    // Create a new user
    const newUser = new User({
      name,
      email,
      phoneNumber,
      buildingName,
      roomNumber,
      password, // You should hash the password in real applications (use bcrypt)
      confirmPassword,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Failed to register user', error: error.message });
  }
};

module.exports = { registerUser };
