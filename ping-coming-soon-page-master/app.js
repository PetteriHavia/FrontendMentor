const email = document.querySelector('.email-input-field');
const submitBtn = document.querySelector('.email-submit-btn');
const message = document.querySelector('.message');

submitBtn.addEventListener('click', () => {
    
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (regex.test(email.value)) {
        message.innerHTML='';
        email.classList.toggle('succes');
    }else{
        message.innerHTML='Please provide a valid email address';
        email.classList.toggle('error');
    }
});