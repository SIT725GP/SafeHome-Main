let client = require("../dbConnect");
var io = require("socket.io");

const alertReceived = () => {
    alert("We detect a fire. We need to respond quickly.")
}

$(document).ready(function(){
    $('#notificationButton').click(()=>{
        alertReceived();
    })
})

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
    'user_id': user_id,
    'token': token,
    'geo': geo
  });
});

//async function sendEmail() {
//    let transporter = nodemailer.createTransport({
//        sendmail: true,
//        newline: 'windows',
//        logger: false
//    });
//    
//    Email.send({
//        Host: "smtp.gmail.com",
//        Username : "xxxx@gmail.com",
//        Password : "xxxx",
//        To : req.email,
//        From : 'xxxx@gmail.com',
//        Subject : "Fire Alert message",
//        Body : "Hello " + req.name + ", You got a new URGENT message from "+ SafeHome + ": There appears to be a fire emergency at your property at " + req.property_address +". Kindly have a look at it or send someone for an inspection. See the tips below if you discover that it is on fire. Stay safe, SafeHome. Some key tips: (i) Call the fire brigade, (ii) Make sure everyone vacates the building, (iii) They move at least 20 meters away from your building (this is for extra safety in case the fire was to cause your building to collapse), (iv) Do not try to enter the building, (v) Waiting until the building is cleared for entry before you re-enter it."
//    }).then(
//        message => alert("mail sent successfully")
//    );
//}

io.socket.on('connection', function(socket) {
    socket.on(join, function(data) {
        socket.join(data.email);
    });
});

io.socket.in('https://api.email.com/api/v1.0/email/send').emit('new alert', {
    from_name: 'SafeHome',
    to_email: req.email_address,
    to_name: req.name,
    property_address: req.property_address,
})

socket.on('new alert', function(data) {
    $.ajax('https://api.email.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json'
    }).done(function() {
        alert('An email is sent!');
    }).fail(function(error) {
        alert('Oops...' + JSON.stringify(error));
    });
  })

module.exports = getMail;