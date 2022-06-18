const User = require('../model/user')
module.exports.user = function (req,res){
    res.render('layout');
}
module.exports.signIn = function (req,res){
    res.render('signIn')
}
module.exports.signUp = function (req,res){
    res.render('signup');
} 
module.exports.profile = function (req,res){
    res.render('user-profile');
}
module.exports.create = function(req,res){
    if(req.body.password != req.body.confirm_password){
        console.log('mismatch');
        return res.redirect( 'back');
    }

    User.findOne({email: req.body.email},function(error,user){
        if(error){
            console.log('user exists already');
            return;
        }
        if(!user){
            User.create(req.body, function(err,user){
                if(error){
                    console.log('user creation error');
                    return;
                }
                console.log('user created');
                res.redirect('/users/sign-in');
            })
        }
    })

}