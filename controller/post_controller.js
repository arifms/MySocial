const Post = require('../model/post');
const Comment = require('../model/comments');
module.exports.post= async function(req,res){
    try{
        await Post.create({
            content: req.body.post,
            user: req.user._id
        });
        res.redirect('back');

    } catch(err){
        console.log('Error at post create',err);
        return;
    }
}


module.exports.destroy = async (req,res)=>{
    try{
        let post = await Post.findById(req.params.id);
            // .id is to compare the string id's otherwise we use _id
            if(post.user == req.user.id){
                post.remove();
                await Comment.deleteMany({post: req.params.id});
                return res.redirect('back');
            }
            else{
                return res.redirect('back');
            }
        

    } catch(err){
        console.log('Error at post deletion',err);
        return;
    }

}