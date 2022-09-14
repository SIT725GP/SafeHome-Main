// send data to the server
const submitProject=(project)=>{
  $.ajax({
    url: '/api/projects',
    contentType: 'application/json',
    data: JSON.stringify(project), // access in body
    type: 'POST',
    success: function(result) {
        alert('Project Succesfully submitted')
    }
});
}


const newProject=()=>{
  let customerAccount = $('#customerAccount').val()
  let incidentDate = $('#incidentDate').val()
  let deviceId = $('#deviceId').val()
  let incidentType = $('#incidentType').val()
  let description = $('#description').val()
  
  let project={customerAccount,incidentDate,incidentType,deviceId,description
  }
  console.log(project)
  submitProject(project)

}


const requestProjects=()=>{
  $.get('/api/projects',(projects)=>{
    if(projects.length>0){
      console.log(projects)
      listProjects(projects)
    }
  })
}




const testButtonFunction=()=>{
  //alert('Thank you for clicking')
}


// connect to the socket

let socket = io();


socket.on('number', (msg) => {
    console.log('Random number: ' + msg);
    var datetime = new Date();
    $("#pageTitle").html("Safe@Home - Incident Reports " )
    
})

//appensa the project row with objects of type project 
listProjects=(projects)=>{
  projects.forEach(project => {
    console.log(project)
    let item='<div class="card col l6 m7">'+
      '<div class="card orange-grey darken-1">'+
       ' <p><b> Incident Date  :</b>'+project.incidentDate+'</p>'+
       ' <p> Account :'+project.customerAccount+'</p>'+
      '</div>'+
      '<div class="card-content">'+
        '<span class="card-title activator grey-text text-darken-4">'+project.incidentType+'<i class="material-icons right">more_vert</i></span>'+
        '<p><b>DeviceID :</b>' + project.deviceID+'</p>'+
      '</div>'+
      '<div class="card-reveal">'+
       ' <span class="card-title grey-text text-darken-4">'+project.incidentDate+'<i class="material-icons right">close</i></span>'+
        '<p>'+project.Description+'</p>'+
     '</div>'+
    '</div>'          
    
    $('#listProjects').append(item)
  });

}


// INITIALIZATION 

$(document).ready(function(){
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
