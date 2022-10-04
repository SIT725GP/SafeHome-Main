let client = require("../dbConnect");
let incidentReports;
setTimeout(() => {
    incidentReports = client.mongoClient.db("safehome").collection("shincidents");

}, 2000)

const getAllIncidents = (res) => {
    incidentReports.find().toArray(function (err, result) {
        if (err) throw err;
        res.send(result)
    })
}


const insertIncident = (incidents, res) => {
    console.log(incidents);
    incidentReports.insertOne(incidents, (err, result) => {
        console.log('Incident Reorted', result)
        res.send({ result: 200 })
    })
}



module.exports = {
    insertIncident,getAllIncidents
}