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



