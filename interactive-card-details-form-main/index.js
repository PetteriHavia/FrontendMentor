const cardName = document.querySelector("#cname");
const cardNumber = document.querySelector("#cnumber");
const cardMonth = document.querySelector("#cmonth");
const cardYear = document.querySelector("#cyear");
const cardCvc = document.querySelector("#cvc");

/*Labels*/
const lname = document.querySelector(".card-name");
const lnumber = document.querySelector(".card-number");
const lcvc = document.querySelector(".card-cvc");
const lmonth = document.querySelector(".card-month");
const lyear = document.querySelector(".card-year");

/*Errors*/
const nameError = document.querySelector(".card-name-error");
const cvcError = document.querySelector(".card-cvc-error");
const numberError = document.querySelector(".card-number-error");
const expError = document.querySelector(".card-exp-error");

/*Confirm Button*/
const continueBtn = document.querySelector(".submit-btn");

/*CARD NAME*/
cardName.addEventListener("input", () => {
  lname.textContent = cardName.value;
  let valid = false;
  let letters = /[A-z]/;

  if (!letters.test(cardName.value)) {
    lname.textContent = "Jane Appleseed";
    nameError.textContent = "Wrong format, Letters only";
  } else {
    cardName.style.borderColor = "none";
    nameError.textContent = "";
  }
  if (cardName.value === "") {
    lname.textContent = "Jane Appleseed";
  }
});

/*CARD NUMBER*/
cardNumber.addEventListener("input", () => {
  lnumber.textContent = cardNumber.value;
  let numbers = /[0-9]/;

  if (!numbers.test(cardNumber.value)) {
    lnumber.textContent = "0000 0000 0000 0000";
    numberError.textContent = "Wrong format, Numbers only";
  } else {
    cardNumber.style.borderColor = "none";
    numberError.textContent = "";
  }
  if (cardNumber.value === "") {
    lnumber.textContent = "0000 0000 0000 0000";
    numberError.textContent = "Can't be blank";
  }
});

/*MONTH*/
cardMonth.addEventListener("input", () => {
  let numbers = /[1-31]/;
  lmonth.textContent = cardMonth.value;

  if (!numbers.test(cardMonth.value)) {
    lmonth.textContent = "00";
    expError.textContent = "Wrong format, numbers only";
  } else {
    cardMonth.style.borderColor = "none";
    expError.textContent = "";
  }
  if (cardMonth.value === "") {
    lmonth.textContent = "00";
    expError.textContent = "Can't be blank";
  }
});

/*YEAR*/
cardYear.addEventListener("input", () => {
  lyear.textContent = cardYear.value;
  let numbers = /[0-9]/;

  if (!numbers.test(cardYear.value)) {
    lyear.textContent = "00";
    expError.textContent = "Wrong format, numbers only";
  } else {
    cardYear.style.borderColor = "none";
    expError.textContent = "";
  }
  if (cardYear.value === "") {
    lyear.textContent = "00";
    expError.textContent = "Can't be blank";
  }
});

/*CVC*/
cardCvc.addEventListener("input", () => {
  lcvc.textContent = cardCvc.value;
  let numbers = /[0-9]/;

  if (!numbers.test(cardCvc.value)) {
    lcvc.textContent = "000";
    cvcError.textContent = "Wrong format, numbers only";
  } else {
    cardCvc.style.borderColor = "none";
    cvcError.textContent = "";
  }
  if (cardCvc.value === "") {
    lcvc.textContent = "000";
    cvcError.textContent = "Can't be blank";
  }
});

continueBtn.addEventListener("click", () => {
  if (cardNumber.value.length < 16) {
    numberError.textContent = "Can't be blank";
  } else {
    console.log("Läpi");
  }

  if (cardNumber.value.length < 16) {
    numberError.textContent = "Can't be blank";
  } else {
    console.log("Läpi");
  }

  /*if(cardName.lenght == "") {
        nameError.textContent = "Can't be blank";
        console.log("eka");

    }else if (cardNumber.lenght < 16) {
        numberError.textContent = "Can't be blank";

    }else if (cardMonth.lenght == "" || cardYear.lenght === "") {
        expError.textContent = "Can't be blank";
    }else {
        console.log("toimii");
    }*/
});

cardName.addEventListener("input", () => {
  lname.textContent = cardName.value;
  let letters = /[A-z]/;

  if (!letters.test(cardName.value)) {
    lname.textContent = "Jane Appleseed";
  }
  if (cardName.value === "") {
    lname.textContent = "Jane Appleseed";
  }
});

cardName.addEventListener("input", () => {
  lname.textContent = cardName.value;
  const name = cardName.value.trim();

  if (!required(name)) {
    lname.textContent = "Jane Appleseed";
  }
  if (name.value === "") {
    lname.textContent = "Jane Appleseed";
  }
});
