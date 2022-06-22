const User = require('../model/user')
const Post = require('../model/post');

module.exports.home = function (req,res){
    console.log(req.cookies);
    Post.find({},function(err,posts){
        if(err){console.log('error');return}

        res.render('home',{
            title:'HomePage',
            post:posts
            
        });
    })
}
