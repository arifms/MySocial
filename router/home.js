// Dependencies...
const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controller');



// paths...
router.get('/',homeController.home);
router.use('/users',require('./users'))



// exports...
module.exports = router;