
const LoginForm = document.getElementById("login-form");
const errorMsg = document.getElementById("error-msg");
const successMsg = document.getElementById("success-msg");
const btnSubmit = document.getElementById("btn-submit");
const showPassword = document.getElementById("showPassword")

btnSubmit.addEventListener("click", (p) => {
    p.preventDefault();
    const email = LoginForm.email.value;
    const password = LoginForm.password.value;


    if (email === "test@gmail.com" && password === "test@123") {
        successMsg.classList.remove("visually-hidden");
        errorMsg.classList.add("visually-hidden");
    
    }

    else{
        successMsg.classList.add("visually-hidden");
        errorMsg.classList.remove("visually-hidden");

    }
})

showPassword.onclick = () => {
    if(password.type === "password"){
        password.type = "text";
    }
    else{
        password.type = "password"
    }
    
}

