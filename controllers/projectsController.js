let Service = require("../services");

const getIncidents = (res) => {
    console.log('controller - incidents ')
    Service.ProjectService.getAllIncidents(res)
}

const createProject = (data, res) => {
    Service.ProjectService.insertIncident(data,res)
}

module.exports = {
    getIncidents, createProject
}