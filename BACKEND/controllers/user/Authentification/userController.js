// controllers/userController.js
const User = require('../../../models/user'); // Import the user schema
const Worker =require('../../../models/Worker/workerModel')
const bcrypt = require('bcryptjs');  // Required for comparing hashed passwords
const jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");

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


// function for user login
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



// function for forgotpassword link

const forgotPassword =  async (req,res) => {
  try{

      const{email} = req.body;
      const user = await User.findOne({email});

      if(!user){
        return res.status(404).json({message:"User not Found"});
      }

      // create a jwt token for resetpassword

      const resetToken = jwt.sign(
        {UserId:user._id},
        process.env.JWT_SECRET,
        {expiresIn: '1h'}
      );
      user.resetToken = resetToken;
      user.resetPasswordExpires = Date.now() + 2*60*1000  // Expire in 2 min;
      await user.save();

      const resetLink = `http://localhost:5174/reset-password/${resetToken}`;

      const transporter = nodemailer.createTransport({
        service : "Gmail",
        auth:{
          user:process.env.EMAIL_USER,
          pass:process.env.EMAIL_PASSWORD,
        },

      });

      const mailOption = {
        from: process.env.EMAIL_USER,
        to:user.email,
        subject: "Password Reset Request",
        text:`Hi ${user.name},

We received a request to reset the password for your account associated with this email address.

Please click on the link below to reset your password:

${resetLink}

If you did not request a password reset, please ignore this email.

For security reasons, this link will expire in 1 hour.

Best regards,
Laundry_Buddy

---

Please do not reply to this email. For any further assistance, contact our support team at laundry@opreator.com
            `,

      };

      //send mail

      await transporter.sendMail(mailOption);

      res.status(200).json({message:"Reset link sent to email",link:resetLink});
     
  }catch(error){

    res.status(500).json({message:"Server Error" , error:error.message})
  }
}



// Reset Password


module.exports = { registerUser,loginUser,forgotPassword };
