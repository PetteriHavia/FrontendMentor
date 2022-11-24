const menuBtn = document.querySelector(".menubtn");
const closeBtn = document.querySelector(".closebtn");
const sideNav = document.querySelector('.side-nav');

menuBtn.addEventListener('click', () => {
    sideNav.classList.toggle('active');
    menuBtn.style.visibility = "hidden";
});


closeBtn.addEventListener('click', () => {
    sideNav.classList.remove('active');
    menuBtn.style.visibility = "visible";
});