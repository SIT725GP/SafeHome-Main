let client = require("../dbConnect");

const alertReceived = () => {
    alert("We detect a fire. We need to respond quickly.")
}

$(document).ready(function(){
    $('#notificationButton').click(()=>{
        alertReceived();
    })
})

function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username : "xxxx@gmail.com",
        Password : "xxxx",
        To : req.email,
        From : 'xxxx@gmail.com',
        Subject : "Fire Alert message",
        Body : "Hello " + req.name + ", You got a new URGENT message from "+ SafeHome + ": There appears to be a fire emergency at your property at " + req.property_address +". Kindly have a look at it or send someone for an inspection. See the tips below if you discover that it is on fire. Stay safe, SafeHome. Some key tips: (i) Call the fire brigade, (ii) Make sure everyone vacates the building, (iii) They move at least 20 meters away from your building (this is for extra safety in case the fire was to cause your building to collapse), (iv) Do not try to enter the building, (v) Waiting until the building is cleared for entry before you re-enter it."
    }).then(
        message => alert("mail sent successfully")
    );
}
