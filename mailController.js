let mailModel = require("../models/mail");

const retrieveMail = (req,res) => {
  mailModel.getMail((err,result) => {
    if(err) {
      res.json({statusCode: 400, message: err})
    }
    else {
      res.json({statusCode: 200, message:"Success", data: result})
    }
  })
}

module.exports = {retrieveMail}