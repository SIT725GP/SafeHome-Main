require('dotenv').config()
const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')


const authRoute = require('./Routes/auth')
const User = require("./Model/user")
//const UserSignUpRoute = require('./Routes/usersignup');
//const url =  "mongodb+srv://kaviuln1:kaviuln@kncluster-1.ieurp6n.mongodb.net/?retryWrites=true&w=majority"
const url =  "mongodb+srv://kaviul:kaviuln@safehome.tqfgm2a.mongodb.net/safehome?retryWrites=true&w=majority"
try{
mongoose.connect(url, {useUnifiedTopology: true},
    () => console.log("Mongoose connected"),
    );
} catch (e) {
    console.log("Mongoose not connected!");
}
const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log("Database Connection Established!")
})


app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(__dirname+'/design'));
app.use('/api', authRoute)
//app.use('/api/SignUp', UserSignUpRoute)

const port= process.env.port || 3000

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/design/login.html');
})


app.post('/', async(req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
    
       const useremail = await User.findOne({email:email});
       res.send(useremail);
       console.log(useremail)

       //const userpassword = await User.findOne({password:password})

       bcrypt.compare(password, User.findOne({password:password}), function(err, result) 
       {
        if(err){
        res.json({error: err})
    }
    if(result){
        let token = jwt.sign({email: useremail}, 'verySecretValue', {expiresIn: '2h'})
        res.json({message:"Login Successful!", token

        })
    }
    else{
        res.json({
            message: "Invalid Password!" })
        }
    })
        
}catch (error) {
        res.status(400).send("Invalid Email")   
    }

})



app.listen(port, ()=> {
    console.log("Server is listening on: ", port)

})


