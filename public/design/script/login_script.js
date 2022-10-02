const LoginForm = document.getElementById("login-form");
const errorMsg = document.getElementById("error-msg");
const successMsg = document.getElementById("success-msg");
let btnSubmit = document.getElementById("btn-submit");
const btnCancel = document.getElementById("btn-cancel");
const showPassword = document.getElementById("showPassword")


showPassword.onclick = () => {
    if(password.type === "password"){
        password.type = "text";
    }
    else{
        password.type = "password"
    }
    
}

