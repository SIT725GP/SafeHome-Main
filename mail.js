let client = require("../dbConnect");
var io = require("socket.io");

// a function for an alert message when a fire is detection
const alertReceived = () => {
    alert("We detect a fire. We need to respond quickly.")
}

$(document).ready(function(){
    $('#notificationButton').click(()=>{
        alertReceived();
    })
})

// connecting to MongoDb
let emailJS;
setTimeout(() => {
    emailJS = client.MongoClient.db().collection("SafeHome");
}, 2000) 

// get mailing details...
const getMail = (callback) => {
    emailJS.find({}).toArray(callback);
  }

app.get('/api/mail', function(req, res) {
  const user_id = req.query.id;

  res.send({
    'from_name': 'SafeHome',
    'to_email': req.email_address,
    'to_name': req.name,
    'property_address': req.property_address
  });
});

// a code for sending emails and shows an alert message
function sendEmail() {
    var templateParams = {
      from_name: 'SafeHome',
      to_email: req.email_address,
      to_name: req.name,
      property_address: req.property_address,
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

io.socket.on('connection', function(socket) {
    socket.on(join, function(data) {
        socket.join(data.email);
    });
});

module.exports = getMail;