const mongoose = require("mongoose");

const guestSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    phone:{
        type:String,
        required:true
    },

    relation:{
        type:String,
        required:true
    },

    tableNo:{
        type:Number,
        required:true
    }

},{timestamps:true});

module.exports = mongoose.model("Guest",guestSchema);