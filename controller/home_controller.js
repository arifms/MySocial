const User = require('../model/user')

module.exports.home = function (req,res){
    console.log(req.cookies);
    res.render('home');
}
