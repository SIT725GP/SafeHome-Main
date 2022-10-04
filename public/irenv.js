// sTo Save the incident report to SafeHome Database
const submitIncident = (Incidents) => {
  $.ajax({
    url: '/api/projects',
    contentType: 'application/json',
    data: JSON.stringify(Incidents), // access in body
    type: 'POST',
    success: function (result) {
      alert('Incident Reporte Successfully')
    }
  });
}


const newIncident = () => {
  let cAccount = $('#cAccount').val()
  let incDate = $('#incDate').val()
  let devId = $('#devId').val()
  let incType = $('#incType').val()
  let incDes = $('#incDes').val()

  let incidents = {
    cAccount, incDate, devId, incType, incDes
  }
  console.log(incidents)
  submitIncident(incidents)

}


//To seach based on incident reported date
var frmDate; 
var endDate; 

const newSearch = (dt1, dt2) => {
  frmDate = getFormattedDate(dt1);
  endDate = getFormattedDate(dt2);
  document.getElementById("listIncidents").innerHTML = "";
  //console.log('inside - newserach() date1 :' + dt1 + 'date2 :' + dt2)
  //endDate = new Date(dt2);
  console.log('on newserch()>>' + frmDate + '----' + endDate)
  converDate()
  //console.log('before caling requestProjects in newSearch()>>')
  requestIncidents()
}

const requestIncidents = () => {
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
  frmDate = getFormattedDate(dt1) 
  endDate = getFormattedDate(dt2)  
  console.log('inside conve2 >>fromDate : ' + frmDate + ' And ' + 'endDate :' + endDate)
}

function getFormattedDate(date) {
  var year = date.getFullYear();

  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;

  var day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;

  return year + '-' + month + '-' + day;
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
  if (frmDate !== 'NaN-NaN-NaN' && endDate !== 'NaN-NaN-NaN') {
    var incListFilt = incidents.filter(a => a.incDate >= frmDate && a.incDate <= endDate);
    document.getElementById("incL-title").innerHTML = 'Incidents Reported from ' + frmDate + ' To ' + endDate;
    listProjects(incListFilt)
    console.log('Filtered Incident Data :' + incListFilt)
  }
  else {
    document.getElementById("incL-title").innerHTML = 'All Incidents Reported';
    listProjects(incidents)
    console.log('unFiltered Incident Data :' + incListFilt)
  }
}



const testButtonFunction = () => {
  //alert('Thank you for clicking')
}



//To List the incidents based on the Search condition 
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
    $('#listIncidents').append(item)
  });
}


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

  requestIncidents()
 


})
