const Post = require('../model/post');

module.exports.post=function(req,res){
  
    console.log(req.user._id);
    Post.create({
        content: req.body.post,
        user: req.user._id
    })
     res.redirect('back');
}