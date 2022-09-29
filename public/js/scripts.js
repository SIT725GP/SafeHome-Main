//ajax function to create user
const addUserToApp = (user) => {
    $.ajax({
        url: '/user/signup',
        data: user,
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
    

    console.log("Form Data Submitted: ", formData);
    addUserToApp(formData);
}


  $(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#formSubmit').click(()=>{
        submitUserForm();
    })
    $('.modal').modal();
  });

