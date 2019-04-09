const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const signupSchema = new Schema ({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});
module.exports = register = mongoose.model('register',signupSchema);

