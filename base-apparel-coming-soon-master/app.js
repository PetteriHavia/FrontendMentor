const formButton = document.querySelector(".form-button");
const errorMessage = document.querySelector(".error-message");
const inputField = document.getElementById("input-field");

formButton.addEventListener('click', () => {

    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(regex.test(inputField.value)) {
        errorMessage.innerHTML="Thank you for subscribing!";
        inputField.classList.remove("error");
    }else if (inputField.value == "" || !regex.test(inputField.value)) {
        errorMessage.innerHTML="Please provide a valid email";
        inputField.classList.toggle("error");
    }else{
        errorMessage.innerHTML="";
        inputField.classList.remove("error");
    }
});
