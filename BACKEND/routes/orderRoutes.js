const express = require('express')
const router = express.Router()
const {submitOrder,getAllOrdersAndTotalNumber,getAllPendingOrdersAndTotalNumber,getAllCompletedOrdersAndTotalNumber} = require('../controllers/orderController')


router.post('/submit-order',submitOrder);
router.get('/all-orders' ,getAllOrdersAndTotalNumber)
router.get('/pending-orders' ,getAllPendingOrdersAndTotalNumber)
router.get('/completed-orders' ,getAllCompletedOrdersAndTotalNumber)


module.exports = router