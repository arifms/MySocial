const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://arif-student:arif-mangodb-basics@cluster1.bqbjjny.mongodb.net/?retryWrites=true&w=majority');
const db = mongoose.connection;




db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;