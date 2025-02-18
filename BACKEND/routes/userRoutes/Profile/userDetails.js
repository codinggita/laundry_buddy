const express = require("express");
const authMiddleware =  require('../../../middleware/authMiddleware');
const {getUserProfile,updateUserProfile} = require('../../../controllers/user/Profile-Management/profileController')
const router = express.Router();

router.get('/profile',authMiddleware,getUserProfile);
router.patch('/profile',authMiddleware,updateUserProfile);

module.exports = router