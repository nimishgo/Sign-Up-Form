

function validatePassword() {
    let password = document.getElementById("password") , confirm_password = document.getElementById("confirm_password");
    let errorP = document.getElementById("error__password");
    if(confirm_password)
    {
        if (password.value != confirm_password.value) {
            errorP.textContent = "Password do not match";      
        }
        else
        {
            errorP.textContent = " ";
        }
    }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
