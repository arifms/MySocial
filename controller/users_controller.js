const User = require('../model/user')
module.exports.profile = function(req,res){
    if(req.isAuthenticated()){
        return res.render('user-profile',{
            title: 'User Profile',
            user: User
            
        });
    }
    return res.redirect('/users/sign-in/')

}

module.exports.signIn = function (req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    res.render('signIn')
}


module.exports.signUp = function (req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    res.render('signup');
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
        }else{
            return res.redirect('back');
        }
    })

}


// module.exports.createSession = function(req,res){
//     User.findOne({email: req.body.email},function(err,user){
//         if(err){console.log('error in signing user'); return;}

//         if(user){
//             // password is not mactched error..
//             if(user.password != req.body.password){
//                 res.redirect('back');
//             }
//             // create session and login user to profile page..
//             res.cookie('user_id',user.id);
//             res.redirect('/users/profile/');
//         }
//         else{
//             res.redirect('back');
//         }
//     })
// }

module.exports.createSession = function(req,res){
    return res.redirect('/');
}

module.exports.destroySession = function(req,res,next){
    req.logout(function(err){
        if(err){return next(err)}
        res.redirect('/');
    });

    // return res.redirect('/');
}


