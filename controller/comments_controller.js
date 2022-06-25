const Comment = require('../model/comments');
const Post = require('../model/post');

module.exports.create = function(req,res){
    Post.findById(req.body.post,function(err,post){
        console.log(req.user._id);
        if(err){console.log(`error`,err); return;}
        if(post){
            Comment.create({
                content: req.body.content,
                post: req.body.post,
                user: req.user._id
            },function(err,comment){
                if(err){
                    console.log(err);
                    return;
                }
                
            post.comments.push(comment);
            post.save();
            res.redirect('/');

        })
        }
    })
    // res.redirect('back');

}



