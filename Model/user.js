const mongoose = require("mongoose")
const Schema = mongoose.Schema
//const passport = require("passport-local-mongoose")

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        max: 50
    },
    phone: {
        type: String,
        trim: true,
        required: true,
        max: 11,
        min: 11,
        unique: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        max: 25,
        unique: true
    },
    password: {
        type: String, 
        required: true
    }
}, {timestamps: true})

//userSchema.plugin(passport);
const Login = mongoose.model('Login', userSchema);
module.exports = Login