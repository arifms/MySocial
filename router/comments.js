const express = require('express');
const router = express.Router();
const passport = require('passport')
const commentController = require('../controller/comments_controller');

// learn to add passport.checkAuthenticationd
router.post('/create',commentController.create);


module.exports=router;