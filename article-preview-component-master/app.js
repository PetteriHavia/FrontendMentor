const shareSection = document.querySelector('.share-section');
const popup = document.querySelector('.popup-section');


shareSection.addEventListener('click', () => {
    popup.classList.toggle('active');
    shareSection.classList.toggle('active');
});



