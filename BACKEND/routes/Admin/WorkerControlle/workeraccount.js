const express = require("express");
const { createWorker,workerLogin } = require("../../../controllers/Admin/Worker Controller/workerController");
const {loginUser}=require('../../../controllers/user/Authentification/userController')
const router = express.Router();

router.post("/add-worker", createWorker); // Admin adds worker
router.post('/login', loginUser);

module.exports = router;