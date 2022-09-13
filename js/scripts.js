const getProjects = () => {
    $.get('/api/projects',(response) => {
        if(response.statusCode==200){
            addCards(response.data);
        }
    })
}

//ajax function to add project
const addProjectToApp = (project) => {
    $.ajax({
        url: '/api/projects',
        data: project,
        type: 'POST',
        success: (result) => {
            alert(result.message);
            location.reload(); // it automatically reloads the page 
        }
    })
}


const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}


const submitUserForm = () => {
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.home_address = $('#home_address').val();
    formData.email = $('#email').val();
    formData.password = $('#password').val();
    formData.password_confirm = $('#password_confirm').val();

    console.log("Form Data Submitted: ", formData);
    addProjectToApp(formData);
}



$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#formSubmit2').click(()=>{
        submitForm();
    })
    //addCards(cardList);
    getProjects();
    $('.modal').modal();
  });


  $(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#formSubmit').click(()=>{
        submitUserForm();
    })
  });

