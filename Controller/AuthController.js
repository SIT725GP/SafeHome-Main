const User = require('../Model/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = (req,res, next) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPass){
        if(err) {
            res.json({
                error: err
            })
        }
        let user = new User ({
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            password: hashedPass
            
        })
        user.save()
        .then(user => {
            res.json({
                message: 'User Added successfully!'
            })
        })
        .catch(error => {res.json({
            message: "An error occured!"
    
        })
    })
})

}

const index = (req, res, next) => {
    User.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error has occured!'
        })
    })
}

const update = (req, res, next) => {
    let UserID = req.body.UserID

    let updateData = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password

    }

    User.findByIdAndUpdate(UserID, {$set: updateData})
    .then(() => {
        res.json({
            message: 'User updated successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: "An error occured!"
        })
    })
}

const login = (req, res, next) => {
    var email = req.body.email
    var password = req.body.password

    User.findOne({$or: [{email:email}, {phone:email}] })
    .then(user => {
        if(user){
            bcrypt.compare(password, user.password, function(err, result) {
                if(err){
                    res.json({error: err})
                }
                if(result){
                    let token = jwt.sign({name: user.name}, 'verySecretValue', {expiresIn: '2h'})
                    res.json({message:"Login Successful!", token

                    })
                }
                else{
                    res.json({
                        message: "Invalid Password!"
                    })
                }

            })

        }
        else {
            res.json({message: 'No user found!'})
        }
    })


}

module.exports = {login, register, index, update
}