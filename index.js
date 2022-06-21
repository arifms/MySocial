// Dependencies...
const express = require('express');
const cookieParser = require('cookie-parser');
const port = 8001;
const router = require('./router/home');
const expressLayout = require('express-ejs-layouts');
const db = require('./config/mongoose');
// used for session cookie
const session =require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

const MongoStore = require('connect-mongo');




// app creation to start the server...
const app = express();

app.use(expressLayout);
app.use(cookieParser());
app.use(express.static('./assets'));
app.use(express.urlencoded({extended: false}));
app.set('layout extractScripts', true)
app.set('layout extractStyles', true)







// view engine setup...
app.set('views','view');
app.set('view engine','ejs');

// mongo store is used to store the session cookie in the db.
// session creation

app.use(session({
    name:'project2',
    // TODO the change of the secret...
    secret:'arif',
    saveUnintialized: false,
    resave: false,
    cookie:{
        maxAge:(1000*60*100)
    },
    store:
    MongoStore.create({
        mongoUrl:'mongodb://localhost:27017/test',
        autoRemove:'disabled'
    },
     function(err){
            console.log(err||'connect-mongodb setup ok')}
    )

}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use('/',router); 


// listener to check the server status...
app.listen(port,function (err){
    if(err){
        console.log(err);
        return;
    }
    console.log(`Example app listening on port ${port}`);
})