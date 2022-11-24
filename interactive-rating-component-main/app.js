
const submitButton = document.getElementById('btn-submit');
const rateDiv = document.querySelectorAll('.rating');
const flexContainer = document.querySelector('.flex-container');
const flexThankyou = document.querySelector('.flex-thankyou-container');
const ratingText = document.querySelector('.rating-box');

//Select rating number
rateDiv.forEach(btn =>{ //iterate all items
  btn.addEventListener("click", function() {
    rateDiv.forEach(btn => {
      if (btn.classList.contains('checked')) //Check if element already has 'checked' class
        btn.classList.remove('checked'); //Remove class from element
    });
    btn.classList.toggle('checked'); //Add 'checked' class to new element
  });
}) ;



//Apply .hidden class to div elements
submitButton.addEventListener("click", function() {

  const getNumber = Array.from(rateDiv).find(btn => 
    btn.classList.contains('checked')).textContent;

  flexThankyou.classList.remove('hidden');
  flexContainer.classList.add('hidden');

  ratingText.textContent = `You selected ${getNumber} out of 5`;
});
      
