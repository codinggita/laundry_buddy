const express = require('express')
const router = express.Router()
const {submitOrder,getAllOrdersAndTotalNumber,getAllPendingOrdersAndTotalNumber,getAllCompletedOrdersAndTotalNumber,deleteOrderBybagNumber} = require('../../controllers/user/Order Management/orderController')


router.post('/submit-order',submitOrder);
router.get('/all-orders' ,getAllOrdersAndTotalNumber)
router.get('/pending-orders' ,getAllPendingOrdersAndTotalNumber)
router.get('/completed-orders' ,getAllCompletedOrdersAndTotalNumber)
  router.delete('/delete-order/:bagNumber',deleteOrderBybagNumber)


module.exports = router