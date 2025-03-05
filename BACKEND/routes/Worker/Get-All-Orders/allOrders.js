const express = require("express");
const router = express.Router();

const {getWorkerOrders} = require("../../../controllers/worker/All-Orders/allorders")

router.get("/getallorderdetails",getWorkerOrders)

module.exports = router