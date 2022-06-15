module.exports.home = function (req,res){
    console.log(req.cookies);
    res.render('home');
}
module.exports.user = function (req,res){
    res.render('layout');
}
module.exports.userSignIn = function (req,res){
    res.render('signIn')
}
module.exports.userSignUp = function (req,res){
    res.render('signup');
} 