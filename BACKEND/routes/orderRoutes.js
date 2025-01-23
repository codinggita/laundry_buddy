const express = require('express')
const router = express.Router()
const {submitOrder} = require('../controllers/orderController')


router.post('/submit-order',submitOrder);

module.exports = router