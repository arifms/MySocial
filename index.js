// Dependencies...
const express = require('express');
const port = 8001;
const router = require('./router/home');
const expressLayout = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const db = require('./config/mongoose');

const bodyParser = require('body-parser');




// app creation to start the server...
const app = express();
app.use(express.static('./assets'));

app.use(express.urlencoded({extended: false}));

app.use(cookieParser());
app.use('/',router); 




// view engine setup...
app.set('views','view');
app.set('view engine','ejs');




app.set('layout extractScripts', true)
app.set('layout extractStyles', true)

app.use(expressLayout);


// listener to check the server status...
app.listen(port,function (err){
    if(err){
        console.log(err);
        return;
    }
    console.log(`Example app listening on port ${port}`);
})