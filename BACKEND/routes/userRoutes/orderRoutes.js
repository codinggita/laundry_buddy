const express = require('express')
const router = express.Router()
const authenticateUser = require("../../middleware/authMiddleware")
const {submitOrder,getAllOrdersAndTotalNumber,getAllPendingOrdersAndTotalNumber,getAllCompletedOrdersAndTotalNumber,deleteOrderBybagNumber} = require('../../controllers/user/OrderManagement/orderController')


router.post('/submit-order',authenticateUser,submitOrder);
router.get('/all-orders' ,getAllOrdersAndTotalNumber)
router.get('/pending-orders' ,getAllPendingOrdersAndTotalNumber)
router.get('/completed-orders' ,getAllCompletedOrdersAndTotalNumber)
  router.delete('/delete-order/:bagNumber',deleteOrderBybagNumber)


module.exports = router