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


//ajax function to add checklist
const addChecklistToApp = (checklist) => {
    alert("Thank you for submitting your checklist")
    $.ajax({
        url: '/api/checklists',
        data: checklist,
        type: 'POST',
        success: (result) => {
            alert(result.message);
            location.reload(); // it automatically reloads the page 
        }
    })
}


const submitUserForm = () => {
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.home_address = $('#home_address').val();
    formData.email = $('#email').val();
    formData.username = $('#username').val();
    formData.password = $('#password').val();
    

    console.log("Form Data Submitted: ", formData);
    addUserToApp(formData);
}


const submitChecklistForm = () => {
    let formData = {};
    formData.confirm_stovetop = $('#confirm_stovetop').val();
    formData.confirm_key = $('#confirm_key').val();
    formData.confirm_stovetop = $('#confirm_stovetop').val();
    formData.confirm_nolights = $('#confirm_nolights').val();
    formData.confirm_nomatches = $('#confirm_nomatches').val();

    

    console.log("Form Data Submitted: ", formData);
    addChecklistToApp(formData);
}




  $(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#formSubmit').click(()=>{
        submitUserForm();
    })

    $('#checklist').click(()=>{
        submitChecklistForm();
    })

    $('.modal').modal();
  });

