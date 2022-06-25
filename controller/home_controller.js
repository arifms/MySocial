const User = require('../model/user')
const Post = require('../model/post');

module.exports.home = function (req,res){
    // console.log(req.cookies);
    // Post.find({},function(err,posts){
    //     if(err){console.log('error');return}

    //     res.render('home',{
    //         title:'HomePage',
    //         post:posts
            
    //     });
    // })

    Post.find({})
    .populate('user')
    .populate({
        path:'comments',
        populate:{
            path: 'user'
        }
    })
    .exec((err,posts)=>{
        return res.render('home',{
            title: 'home',
            post: posts,
          
        })
    })
}
