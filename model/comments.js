const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content:{
        type:String,
        require: true
        },
    // users comment 
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
        },
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Post'
    }
},{
    timestamps:true
});

const comment = mongoose.model('Comment',commentSchema);

module.exports =comment;