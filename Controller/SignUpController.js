const UserSignUp = require('../images/Model/userSignUp')

const index = (req, res, next) => {
    UserSignUp.find()
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

const show = (res, req, next) => {
    let UserID = req.body.UserID
    UserSignUp.findById(UserID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: "An error has occured!"

        })
    })
}


// store new user
const store = (req, res, next) => {
    let usersignup = new UserSignUp({
        name: req.body.name,
        age: req.body.age,
        sex: req.body.sex,
        email: req.body.email,
        mobile: req.body.mobile
    })
    usersignup.save()
    .then(response => {
        res.json({
            message: 'New user added successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured in adding new user!'
        })
    })
}

// update a user info

const update = (req, res, next) => {
    let UserID = req.body.UserID

    let updateData = {
        name: req.body.name,
        age: req.body.age,
        sex: req.body.sex,
        email: req.body.email,
        mobile: req.body.mobile

    }

    UserSignUp.findByIdAndUpdate(UserID, {$set: updateData})
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

//delete a user

const deleteUser = (req, res, next) => {
    let UserID = req.body.UserID

    UserSignUp.findOneAndRemove(UserID)
    .then(() => {
        res.json({
            message: "User deleted successfully!"
        })
    })
    .catch(error => {
        res.json({
            message: "Error occured in deleting a user!"
        })
    })
}


module.exports = { index, show, store, update, deleteUser}