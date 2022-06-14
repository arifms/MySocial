// Dependencies...
const homeController = require('../controller/home_controller');
const express = require('express');
const app = express();
const router = express.Router();


// paths...
router.get('/',homeController.home);
router.get('/user',homeController.user);
router.get('/signIn',homeController.userSignIn);
router.get('/signup',homeController.userSignUp);


// exports...
module.exports = router;