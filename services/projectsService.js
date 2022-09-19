let client = require("../dbConnect");
let projectsCollection;
setTimeout(() => {
    projectsCollection = client.mongoClient.db("SafeHome").collection("incidentReports");

}, 2000)

const getAllProjects = (res) => {
    projectsCollection.find().toArray(function (err, result) {
        if (err) throw err;
        res.send(result)
    })
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