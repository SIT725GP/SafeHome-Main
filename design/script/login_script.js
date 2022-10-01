 //let User = require('../Model/user')
//  let bcrypt = require('bcryptjs')
//  let jwt = require('jsonwebtoken')
const LoginForm = document.getElementById("login-form");
const errorMsg = document.getElementById("error-msg");
const successMsg = document.getElementById("success-msg");
let btnSubmit = document.getElementById("btn-submit");
const btnCancel = document.getElementById("btn-cancel");
const showPassword = document.getElementById("showPassword")
// const app = require("express");

//  let User = require('../Model/user')

// btnSubmit.addEventListener("click", (p) => {
//     p.preventDefault();

//     app.post('/', async(req, res) => {
//         try {
//             const email = req.body.email;
//             const password = req.body.password;
        
//            const useremail = await User.findOne({email:email});
//            res.send(useremail);
//            console.log(useremail)
            
//         } catch (error) {
//             res.status(400).send("Invalid Email")   
//         }
//     })
    // const useremail = LoginForm.email.value;
    // const password = LoginForm.password.value;

    // app.post('/', async(req, res) => {
    //     try {

    //         const email = LoginForm.email.value;
    //         const password = LoginForm.password.value;
    
    //    const useremail = await User.findOne({email:email});
    //    res.send(useremail);
    //    console.log(useremail)
    //    successMsg.classList.add("visually-hidden");
    //    errorMsg.classList.remove("visually-hidden");
            
    //     } catch (error) { 
    //         res.status(400).send("Invalid Email")
    //         successMsg.classList.remove("visually-hidden");
    //         errorMsg.classList.add("visually-hidden");
            
    //     }

    // })
    

    // User.findOne({$or: [{email:useremail}] })
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
    // // .catch(error => {
    // //     // res.json({
    // //     //     message: "No user found!"
    // //     // })
    // //     successMsg.classList.remove("visually-hidden");
    // //     errorMsg.classList.add("visually-hidden");
    // // })


    // if (useremail === "kav@gmail.com" && password === "test@123") {
    //     successMsg.classList.remove("visually-hidden");
    //     errorMsg.classList.add("visually-hidden");
    
    // }

    // else{
    //     successMsg.classList.add("visually-hidden");
    //     errorMsg.classList.remove("visually-hidden");

    // }

    // showPassword.onclick = () => {
    //     if(password.type === "password"){
    //         password.type = "text";
    //     }
    //     else{
    //         password.type = "password"
    //     }
        
    // }
    
//})

showPassword.onclick = () => {
    if(password.type === "password"){
        password.type = "text";
    }
    else{
        password.type = "password"
    }
    
}

