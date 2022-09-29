let client = require("../dbConnect");
let projectsCollection;
setTimeout(() => {
    projectsCollection = client.mongoClient.db("safehome").collection("shincidents");

}, 2000)

const getAllProjects = (res) => {
    projectsCollection.find().toArray(function (err, result) {
        if (err) throw err;
        res.send(result)
    })
}

async function findIncidentByDates(client, startDate,endDate) {
    const projectsCollection = client.mongoClient.db("safehome").collection("shincidents").find({ incedentDate: nameOfListing });

    if (result) {
        console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
        console.log(result);
    } else {
        console.log(`No listings found with the name '${nameOfListing}'`);
    }
}

const insertProject = (project, res) => {
    projectsCollection.insertOne(project, (err, result) => {
        console.log('Incident Reorted', result)
        res.send({ result: 200 })
    })
}



module.exports = {
    getAllProjects,insertProject
}