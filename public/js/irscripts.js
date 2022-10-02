
    const getIncidents = () => {
        $.get('/api/incidents',(response) => {
            if(response.statusCode==200){
                addCards(response.data);
            }
        })
    }
    
    //ajax function...
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
    
    const submitForm = () => {
        let formData = {};
        formData.cAcccount = $('#cAccount').val();
        formData.devID = $('#devID').val();
        formData.incDate = $('#incDate').val();
        formData.incType = $('#incType').val();
        formData.incDes = $('#incDes').val();
    
        console.log("Form Data Submitted: ", formData);
        addProjectToApp(formData);
    }
    
    
    /*const addCards = (items) => {
        items.forEach(item => {
            let itemToAppend = '<div class="col s4 center-align">'+
        '</div><div class="card-content">'+
        '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.link+'</a></p></div>'+
        '<div class="card-reveal">'+
            '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
            '<p class="card-text card-desc-color">'+item.desciption+'</p>'+
          '</div></div></div>';
          $("#card-section").append(itemToAppend)
        });
    }*/
    
    const clickMe = () => {
        alert("Thanks for clicking me. Hope you have a nice day!")
    }
    
 

    $(document).ready(function(){
        $('.materialboxed').materialbox();
        $('#formSubmit').click(()=>{
            submitForm();
        })
        getIncident();
        $('.modal').modal();
      });
    