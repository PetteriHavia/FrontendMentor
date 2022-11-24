const formButton = document.querySelector('.form-button');
const statusMessage = document.querySelectorAll('.action-message');
const inputStatus = document.querySelectorAll('.input-style');
const email = document.querySelector('.email');
const emailMessage = document.querySelector('.email-message');
const form = document.querySelector('.form-information');


form.addEventListener("submit", e => {    

    e.preventDefault();

    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //CHECK EMAIL
    if(regex.test(email.value)) {
        email.classList.remove("error");
        emailMessage.innerHTML="";
    }else{
        emailMessage.classList.toggle('active');
        email.classList.toggle('error');
        emailMessage.innerHTML="Looks like this is not an email";
    }


    //NOT WORKING
    //NEED TO ITERATE THROUGH MESSAGE

    for(let i = 0; i < inputStatus.length; i++) {
        if (inputStatus[i].value == '') {
            statusMessage[i].classList.toggle('active');
            inputStatus[i].classList.toggle('error');

        }else{
            statusMessage[i].classList.remove('active');
            inputStatus[i].classList.remove('error');
        }
    };
});