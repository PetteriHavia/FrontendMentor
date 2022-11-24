const markAll = document.querySelector('.markall-btn');
const message = document.querySelectorAll('.message');
const number = document.querySelector('.notification-number');

function getNumber () {
    let getNumber= document.querySelectorAll('.unread');
    number.textContent = getNumber.length; //set notification number count
}

markAll.addEventListener("click", () => {
    message.forEach(msg => { //iterate all items
        msg.classList.remove('unread'); //Remove class from element
    })
    getNumber(); //execute function getNumber to update notification number
})

