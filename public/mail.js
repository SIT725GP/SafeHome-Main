var express = require("express")
var app = express()

const MongoClient = require('mongodb').MongoClient;

//console.log(relt);
//console.log(lan);

//database connection ...
const uri = "mongodb+srv://loliwe:Haz6PS7Wi1unrkad@safehome.tqfgm2a.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, });

var _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, uri) {
      //verifty we got a good "uri" object
      if (uri) {
        _db = uri.db("safehome");
        console.log("Successfuly connected to MongoDB.");
      }
      return callback(err);
    });
  },
  geturi: function () {
    return _db;
  },
};

app.get('/', (req, res) => {
  res.send('Okay localhost:3000 is working');
}); 

// retrieving the specific information from MongoDB
const database = client.db("safehome");
const email = database.collection("email");

const sult = email.find({device_id: "002"}).forEach(console.dir)
  .then((res) => {
    console.log('Data has been retrieved successfully');
});

// a code for sending emails and shows an alert message
function sendEmail(email_address, first_name, property_address, lan) {
    var templateParams = {
        from_name: 'SafeHome',
        to_email: 'email_address',
        to_name: 'first_name',
        property_address: 'property_address',
        date: 'xx/xx/xxx 00:00:00',
    };
  
    emailjs.send('service_bes44xa', 'template_s7wxjln', templateParams)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert("the message has been sent successfully");
    },
    function(error) {
        console.log('FAILED...', error);
    });
}
