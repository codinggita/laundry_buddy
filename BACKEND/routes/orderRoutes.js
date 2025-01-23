const express = require('express')
const router = express.Router()
const {submitOrder,getAllOrders,getTotalNumberOfOrders} = require('../controllers/orderController')


router.post('/submit-order',submitOrder);
router.get('/all-orders' ,getAllOrders)
router.get('/total-orders' ,getTotalNumberOfOrders)


module.exports = router