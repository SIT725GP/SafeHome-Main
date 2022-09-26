const mongoose = require("mongoose")
const Schema = mongoose.Schema

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

const User = mongoose.model('User', userSchema)
module.exports = User