const {Schema, model} = require("../db/connection") // import Schema & model

// User Schema - (Form registration)
const UserSchema = new Schema({
    
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    home_address: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true}

})

// User model
const User = model("User", UserSchema)

module.exports = User