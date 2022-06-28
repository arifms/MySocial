const express = require('express');
const router = express.Router();

const postController = require('../controller/post_controller');


router.post('/create',postController.post);

router.get('/destroy/:id',postController.destroy);
module.exports =router;