const form = document.getElementById("form");
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    checkForm();
})
username.addEventListener("blur", () =>{
    checkInputUsername();
})
email.addEventListener("blur", () =>{
    checkInputEmail();
})
password.addEventListener("blur", () =>{
    checkInputpassword();
})
function checkInputUsername(){
    const usernameValue = username.value;

   if(usernameValue === ""){
    erroInput(username, "Preencha um username!")
   }else{
    const formItem = username.parentElement;
    formItem.className= "form-content" 
   }
}
function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
        erroInput(email, "O email é obrigatório.")
    }else{
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }
}
function checkInputpassword(){
    const passwordValue = password.value;

    if(passwordValue === ""){
        erroInput(password, "A senha é obrigatóri.")
    }else if(passwordValue.length < 8){
        erroInput(password, "A senha precisa ter no mínimo 8 caracteres.")
    }else{
        const formItem = password.parentElement;
        formItem.className ="form-content"
    }
}
function checkInputpasswordConfimation(){
    const passwordValue = password.value;
    const confirmationPasswordValue = passwordConfirmation.value;

    if(confirmationPasswordValue === ""){
        erroInput(passwordConfirmation, "A confirmação de senha é obrigatóri.")
    }else if(confirmationPasswordValue !== passwordValue){
        erroInput(passwordConfirmation, "As senhas não são iguais .")
    }else{
        const formItem = passwordConfirmation.parentElement;
        formItem.className ="form-content"
    }
}
function checkForm(){
    checkInputUsername();
    checkInputEmail();
    checkInputpassword();
    checkInputpasswordConfimation();

    const formItem = form.querySelectorAll(".form-content")
    const isValid = [...formItem].every((item) =>{
        return item.className === "form-content"
    });

    if(isValid){
        alert("CADASTRADO COM SUCESSO!")
    }
}

function erroInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error"
}