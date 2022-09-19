var express = require("express")
var router = express.Router();
//let client = require("../dbConnect");
let controller = require("../controller")

router.post('/',(req,res) => {
  controller.mailController.retrieveMail(req,res)
  //    console.log("New Project added", req.body)
//    var newProject = req.body;
//    insertProjects(newProject,(err,result) => {
//      if(err) {
//        res.json({statusCode: 400, message: err})
//      }
//      else {
//        res.json({statusCode: 200, message:"Project Successfully added", data: result})
//      }
//    })
})

// get project...
//const getProjects = (callback) => {
//    projectCollection.find({}).toArray(callback);
//  }

router.get('/',(req,res) => {
  controller.mailController.createMail(req,res)
//    getProjects((err,result) => {
//      if(err) {
//        res.json({statusCode: 400, message: err})
//      }
//      else {
//        res.json({statusCode: 200, message:"Success", data: result})
//      }
//    })
})

module.exports = router;