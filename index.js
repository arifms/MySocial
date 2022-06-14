// Dependencies...
const express = require('express');
const port = 8001;
const router = require('./router/home');
const expressLayout = require('express-ejs-layouts');

// app creation to start the server...
const app = express();
app.use('/',router);
app.use(expressLayout);
app.use(express.static('./assets'));



// view engine setup...
app.set('view engine','ejs');
app.set('views','view');



// listener to check the server status...
app.listen(port,function (err){
    if(err){
        console.log(err);
        return;
    }
    console.log(`Example app listening on port ${port}`);
})