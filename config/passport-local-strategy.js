const User = require('../model/user');
const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({
    usernameField :'email'},
    function(email,password,done){
        User.findOne({email:email},function(err,user){
            if(err){
                console.log('error while connecting-->passport');return done(err);
            }
            if(!user || user.password != password){
                console.log('invalid username or password');
                return done(null,false);
            }
            return done(null,user);
        })
    }
))


// serialize user
passport.serializeUser(function (user,done) {
    return done(null,user.id);
})


// deserialize user

passport.deserializeUser(function (id,done) {
    User.findById(id,function (err,user) {
        if(err){
            console.log('user deserialize not done');
            return done(err);
        }
        return done(null,user);
    })
})

passport.checkAuthentication = function(req,res,next){
    if(req.isAuthenticated()){
        // console.log('logged in',next())
        return next();
        
    }
    
    // if not authenticated..
    return res.redirect('/users/sign-in');
}

passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthicated){
        res.locals.user = req.user;
    }
    next();
}