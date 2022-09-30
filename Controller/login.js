// require("dotenv").config();
// const {Router} = require("express");
// const User = require("../Model/User");
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const router = Router();

// router.post("/login", async (req, res) => {
//     try {
//         const user = await User.findOne({email:req.body.email});
//         if(user) {
//             const result = await bcrypt.compare(req.body.password, user.password);
//             if (result) {
//                 const token = await jwt.sign({email: user.email});
//                 res.json({token});
//             } else {
//                 res.status(400).json({error : "password doesn't match"});
//             }
//         }
//     } catch (error) {
//         res.status(400).json({error});
        
//     }
// })
// module.exports = router
