const mongoose = require('mongoose');

const pekopleSchema =  mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    createdOn:{
        type:Date,
        required:true,
        default:Date.now
    }
});

module.exports = mongoose.model('People',pekopleSchema);