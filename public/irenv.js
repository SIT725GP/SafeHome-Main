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
  let incDate = getFormattedDate($('#incDate').val())
  let devId = $('#devId').val()
  let incType = $('#incType').val()
  let incDes = $('#incDes').val()

  let incidents = {
    cAccount, incDate, devId, incType, incDes
  }
  console.log(incidents)
  submitIncident(incidents)

}

var frmDate; //= getFormattedDate($('#frmDate').val());
var endDate; //= getFormattedDate($('#endDate').val());

const newSearch = (dt1, dt2) => {
  frmDate = getFormattedDate(dt1);
  endDate = getFormattedDate(dt2);
  //console.log('inside - newserach() date1 :' + dt1 + 'date2 :' + dt2)
  //endDate = new Date(dt2);
  console.log('on newserch()>>' + frmDate + '----' + endDate)
  converDate()
  //console.log('before caling requestProjects in newSearch()>>')
  requestProjects()
}

const requestProjects = () => {
  $.get('/api/projects', (incidents) => {
    if (incidents.length > 0) {
      console.log(incidents)
      converDate()
      filterData(incidents)
      //listProjects(incidents)
      //listProjects2(incidents)
    }
  })
}

const converDate = () => {
  //console.log('inside conve1 >> fromDate : ' + $('#frmDate').val() + ' And ' + 'endDate :' + $('#endDate').val())
  var dt1 = new Date($('#frmDate').val())
  var dt2 = new Date($('#endDate').val())
  //console.log('fromDate dt1 : '+dt1+' And '+ 'endDate dt2:'+dt2)
  // $("#pageTitle").html("Safe@Home - Incident Reports ")
  //$("#pageTitle2").html("Safe@Home - Incident Reports ")
  frmDate = getFormattedDate(dt1) //.getFullYear()+'-'+dt1.getMonth()+'-'+dt1.getDate()
  endDate = getFormattedDate(dt2)  //.getFullYear()+'-'+dt2.getMonth()+'-'+dt2.getDate()
  console.log('inside conve2 >>fromDate : ' + frmDate + ' And ' + 'endDate :' + endDate)
}

function getFormattedDate(date) {
  var year = date.getFullYear();

  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;

  var day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;
  
  return  year+ '-' +  month+ '-' +day ;
}

const filterData = (incidents) => {
  // var frmDate = $('#frmDate').val();
  //var endDate = $('#endDate').val();
  console.log('inside fiterdata() >>' + incidents)
  console.log('inside filterData >> fromDate : ' + frmDate + ' And ' + 'endDate :' + endDate)
  var incListFilt = incidents.filter(a => {
    var date = a.incDate;
    return (date >= frmDate && date <= endDate);
  });
  if (frmDate !== "" && endDate !== "") {
  var incListFilt = incidents.filter(a => a.incDate >= frmDate && a.incDate <= endDate);
     listProjects(incListFilt)}
  else
    listProjects(incidents)
  console.log('Filtered Incident Data :' + incListFilt)
}



const testButtonFunction = () => {
  //alert('Thank you for clicking')
}


// connect to the socket

//let socket = io();



//appends a the project row with objects of type project 
var cnt = 1;
listProjects = (incidents) => {
  incidents.forEach(incidents => {
    //console.log(project)
    let item = '<div class="card col l6">' +
      '<div class="card blue-grey darken-0">' +
      '<P>' + cnt++ + ":" + incidents.incDate + '</p> </div>' +
      '<div> <p><b>Account :</b></t>' + incidents.cAccount + '</p>' +
      '</div>' +
      '<div class="card-content">' +
      '<span class="card-title activator grey-text text-darken-4">' + incidents.incType + '<i class="material-icons right">more_vert</i></span>' +
      '<p><b>DeviceID :</b>' + incidents.devId + '</p>' +
      '</div>' +
      '<div class="card-reveal">' +
      ' <span class="card-title grey-text text-darken-4">' + incidents.incDate + '<i class="material-icons right">close</i></span>' +
      '<p>' + incidents.incDes + '</p>' +
      '</div>' +
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
  $('form').submit(function (e) {
    e.preventDefault();
    // or return false;
  });

  // get data and build the ui component
  //listProjects(dummyData)

  //bind the button
  $('#testButton').click(testButtonFunction)

  //test get call
  //$.get('/test?user_name="User"',(result)=>{
  //  console.log(result)
  // })

  //newSearch()
  /// modal window initialize
  $('.modal').modal();

  requestProjects()


})
