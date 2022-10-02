// send data to the server
const submitIncident = (Incidents) => {
  $.ajax({
    url: '/api/projects',
    contentType: 'application/json',
    data: JSON.stringify(Incidents), // access in body
    type: 'POST',
    success: function (result) {
      alert('Project Succesfully submitted')
    }
  });
}


const newIncident = () => {
  let cAccount = $('#cAccount').val()
  let incDate = $('#incDate').val()
  let devId = $('#devId').val()
  let incType = $('#incType').val()
  let incDes = $('#incDes').val()

  let incident = {
    cAccount,incDate,devId,incType,incDes
  }
  console.log(incident)
  submitIncident(incident)

}
var frmDate = new Date("1900-09-24");
var endDate = new Date("2022-12-31");

const newSearch = () => {
frmDate = new Date($('#frmDate').val())
endDate = new Date($('#endDate').val())
console.log('on newserch()>>')
converDate()
requestProjects()
}

const converDate = () => {
  console.log('fromDate : '+$('#frmDate').val()+' And '+ 'endDate :'+$('#endDate').val())
  //var frmDate = $('#frmDate').val()
  //var endDate = $('#endDate').val()
  //console.log('fromDate : '+frmDate+' And '+ 'endDate :'+endDate)
 // $("#pageTitle").html("Safe@Home - Incident Reports ")
  //$("#pageTitle2").html("Safe@Home - Incident Reports ")
  //frmDate = dt1.getFullYear()+"-"+ dt1.getMonth()+"-"+dt1.getDate()
  //endDate = dt2.getFullYear()+"-"+ dt2.getMonth()+"-"+dt2.getDate()
  console.log('fromDate : '+frmDate+' And '+ 'endDate :'+endDate)
}


const requestProjects = () => {
  $.get('/api/projects', (incidents) => {
    if (incidents.length > 0) {
      console.log("unfiltered Incidents :"+incidents)
      filterData(incidents)
      //listProjects(incidents)
      //listProjects2(incidents)
    }
  })
}

const filterData =(incidents) => {
  //var frmDate = $('#frmDate').val()
  //var endDate = $('#endDate').val()
  var resultIncedentData = incidents.filter(a => {
    var date = new Date(a.incDate);
     return (date >= frmDate && date <= endDate);
  });
  listProjects(resultIncedentData)
  console.log("Filtered Incident Data :"+resultIncedentData)
  }
  

const testButtonFunction = () => {
  //alert('Thank you for clicking')
}


// connect to the socket

//let socket = io();


//appends a the project row with objects of type project 
var cnt=1;
listProjects=(incidents)=>{
  incidents.forEach(incidents => {
    //console.log(project)
    let item='<div class="card col l6">'+
      '<div class="card blue-grey darken-0">'+
      '<P>'+cnt+++":"+incidents.incDate+'</p> </div>'+
       '<div> <p><b>Account :</b></t>'+incidents.cAccount+'</p>'+
      '</div>'+
      '<div class="card-content">'+
        '<span class="card-title activator grey-text text-darken-4">'+incidents.incType+'<i class="material-icons right">more_vert</i></span>'+
        '<p><b>DeviceID :</b>' + incidents.devId+'</p>'+
      '</div>'+
      '<div class="card-reveal">'+
       ' <span class="card-title grey-text text-darken-4">'+incidents.incDate+'<i class="material-icons right">close</i></span>'+
        '<p>'+incidents.incDes+'</p>'+
     '</div>'+
    '</div>'          
     $('#listProjects').append(item)
  });
}


/*var count = 1;
let item2 = '<table class=""highlight"" style="width:100%"><thead><tr><th>#No</th> <th>Account</th><th>Incident Date</th><th>Incident Type</th><th>Device ID</th><th>Description</th></tr>' +
  '</thead> <tbody>';
$('#listProjects2').append(item2);
listProjects2 = (projects) => {
  projects.forEach(project => {
    item2 = '<tr><td>' + count++ + '<td>' + project.customerAccount + '</td><td>' + project.incidentDate + '</td><td>' + project.incidentType + '</td>' +
      '<td>' + project.deviceID + '</td><td>' + project.description + '</td></tr>'
    $('#listProjects2').append(item2)
  },
    $('#listProjects2').append('</tbody> </table> </div>'));
    //console.log(listProjects2)
}*/




// INITIALIZATION 

$(document).ready(function () {
  console.log('Ready')

  // get data and build the ui component
  //listProjects(dummyData)

  //bind the button
  $('#testButton').click(testButtonFunction)

  //test get call
  //$.get('/test?user_name="User"',(result)=>{
  //  console.log(result)
  // })

  /// modal window initialize
  $('.modal').modal();
  requestProjects()


})
