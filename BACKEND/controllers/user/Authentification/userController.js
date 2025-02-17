// controllers/userController.js
const User = require('../../../models/user'); // Import the user schema
const Worker =require('../../../models/Worker/workerModel')
const bcrypt = require('bcryptjs');  // Required for comparing hashed passwords
const jwt = require('jsonwebtoken')

const registerUser = async (req, res) => {
  const { name, email, phoneNumber, buildingName, roomNumber,bagNumber, password, confirmPassword } = req.body;

  // Basic validations
  if (!name || !email || !phoneNumber || !buildingName || !roomNumber || !bagNumber || !password || !confirmPassword) {
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

    const existingNumber = await User.findOne({phoneNumber});
    if(existingNumber){
      return res.status(400).json({message: ' 📞 Phonenumber is already in use'})
    }


    const hashedPassword = await bcrypt.hash(password, 10);

    
    // Create a new user
    const newUser = new User({
      name,
      email,
      phoneNumber,
      buildingName,
      roomNumber,
      bagNumber,
      password: hashedPassword,
      
    

    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ success:true,message: 'User registered successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Failed to register user', error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email }) || await Worker.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Compare password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }


    const token = jwt.sign(
      {
      userId: user._id,
      role :user.role
    },
    process.env.JWT_SECRET, 
    { expiresIn: '1h' }
    );

    // Login successful
    res.status(200).json({
      success:true,
      message: "Login successful",
      token,
      name: user.name,
      userId: user._id,
      role: user.role
    });
  } catch (error) {
    res.status(500).json({ message: 'Login failed', error: error.message });
  }
};




module.exports = { registerUser,loginUser };
