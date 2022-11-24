
const ac = document.querySelectorAll(".accordio");

  ac.forEach(btn =>{ //iterate all items
    btn.addEventListener("click", function() {
      ac.forEach(btn => {
        if (btn.classList.contains('active')) //Check if element already has 'checked' class
          btn.classList.remove('active'); //Remove class from element
      });
      btn.classList.toggle('active'); //Add 'checked' class to new element
    });
  });
  
  
  //THIS CODE WORKS AS WELL
  
  /*const accordio = document.querySelectorAll(".accordio");

  accordio.forEach((event) => {
    event.addEventListener("click", () => {

      if (event.classList.contains("active")) {
        accordio.forEach((event) => {
          event.classList.remove("active");
        });
      } else {
        accordio.forEach((event) => {
          event.classList.remove("active");
        });
        event.classList.add("active");
      }
    });
  });
*/


