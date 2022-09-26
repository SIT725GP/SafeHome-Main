const mongoose = require('mongoose')
const Schema = mongoose.Schema
const signUpSchema = new Schema({
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
    age: {
        type: Number, 
        required: true,
        max: 2,
        min: 2
    },
    sex: {
        type: String, 
        required: true
    }
}, {timestamps: true})

const UserSignUp = mongoose.model("UserSignUp", signUpSchema)
module.exports = UserSignUp