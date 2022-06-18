// Dependencies...
const homeController = require('../controller/home_controller');
const express = require('express');
const app = express();
const router = express.Router();


// paths...
router.get('/',homeController.home);
router.use('/users',require('./users'))



// exports...
module.exports = router;