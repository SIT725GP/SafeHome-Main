// let User = require('../Model/user')
// let bcrypt = require('bcryptjs')
// let jwt = require('jsonwebtoken')
const LoginForm = document.getElementById("login-form");
const errorMsg = document.getElementById("error-msg");
const successMsg = document.getElementById("success-msg");
const btnSubmit = document.getElementById("btn-submit");
const showPassword = document.getElementById("showPassword")

btnSubmit.addEventListener("click", (p) => {
    p.preventDefault();
    const email = LoginForm.email.value;
    const password = LoginForm.password.value;

    // User.findOne({$or: [{email:email}] })
    // .then(user => {
    //     if(user){
    //         bcrypt.compare(password, user.password, function(err, result) {
    //             if(err){
    //                 res.json({error: err})
    //             }
    //             if(result){
    //                 let token = jwt.sign({name: user.name}, 'verySecretValue', {expiresIn: '2h'})
    //                 res.json({message:"Login Successful!", token

    //                 })
    //                 successMsg.classList.add("visually-hidden");
    //                 errorMsg.classList.remove("visually-hidden");
    //             }
    //             else{
    //                 // res.json({
    //                 //     message: "Invalid Password!"
    //                 // })
    //                 successMsg.classList.remove("visually-hidden");
    //                 errorMsg.classList.add("visually-hidden");
    
    //             }

    //         })

    //     }
    //     else {
    //        // res.json({message: 'No user found!'})
    //         successMsg.classList.remove("visually-hidden");
    //         errorMsg.classList.add("visually-hidden");
    //     }
    // })
    // .catch(error => {
    //     // res.json({
    //     //     message: "No user found!"
    //     // })
    //     successMsg.classList.remove("visually-hidden");
    //     errorMsg.classList.add("visually-hidden");
    // })


    if (email === "test@gmail.com" && password === "test@123") {
        successMsg.classList.remove("visually-hidden");
        errorMsg.classList.add("visually-hidden");
    
    }

    else{
        successMsg.classList.add("visually-hidden");
        errorMsg.classList.remove("visually-hidden");

    }
})

showPassword.onclick = () => {
    if(password.type === "password"){
        password.type = "text";
    }
    else{
        password.type = "password"
    }
    
}

