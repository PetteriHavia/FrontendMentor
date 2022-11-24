const cardName = document.querySelector("#cname");
const cardNumber = document.querySelector("#cnumber");
const cardMonth = document.querySelector("#cmonth");
const cardYear = document.querySelector("#cyear");
const cardCvc = document.querySelector("#cvc");
const formBtn = document.querySelector(".submit-btn");

const form = document.querySelector(".card-form");
const test = document.querySelector(".thankyou");

/*Labels*/
const lname = document.querySelector(".card-name");
const lnumber = document.querySelector(".card-number");
const lcvc = document.querySelector(".card-cvc");
const lmonth = document.querySelector(".card-month");
const lyear = document.querySelector(".card-year");

/*Confirm Button*/
//const continueBtn = document.querySelector(".submit-btn");

//Return true if value is empty
const required = (value) => (value === "" ? false : true);

//Return false if value is not between min and max
const between = (lenght, min, max) =>
  lenght < min || lenght > max ? false : true;

//Check inputfields for validation
const isNameValid = (name) => {
  const re = /^[A-Za-z\s]*$/;
  return re.test(name);
};

const isNumberValid = (number) => {
  const re = /[0-9]/;
  return re.test(number);
};

const isMonthValid = (month) => {
  //const re = /[0-2]|[1-9]/;
  const re = /^(0?[1-9]|1[012])$/;
  return re.test(month);
};

const isYearValid = (year) => {
  const re = /^\d{2}$/;
  return re.test(year);
};

const isCvcValid = (cvc) => {
  const re = /^(?:\D*\d){3}\D*$/;
  return re.test(cvc);
};

cardName.addEventListener("input", () => {
  lname.textContent = cardName.value;
  const name = cardName.value.trim();

  if (!isNameValid(name)) {
    lname.textContent = "Jane Appleseed";
  }
  if (!required(name)) {
    lname.textContent = "Jane Appleseed";
  }
});

cardNumber.addEventListener("input", () => {
  lnumber.textContent = cardNumber.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
  const number = cardNumber.value;

  if (!isNumberValid(number)) {
    lnumber.textContent = "0000 0000 0000 0000";
  }
  if (!required(number)) {
    lnumber.textContent = "0000 0000 0000 0000";
  }
});

cardMonth.addEventListener("input", () => {
  lmonth.textContent = cardMonth.value;
  const month = cardMonth.value.trim();

  if (!isMonthValid(month)) {
    lmonth.textContent = "00";
  }
  if (!required(month)) {
    lmonth.textContent = "00";
  }
});

cardYear.addEventListener("input", () => {
  lyear.textContent = cardYear.value;
  const year = cardYear.value.trim();

  if (!isYearValid(year)) {
    lyear.textContent = "00";
  }
  if (!required(year)) {
    lyear.textContent = "00";
  }
});

cardCvc.addEventListener("input", () => {
  lcvc.textContent = cardCvc.value;
  const cvc = cardCvc.value.trim();

  if (!isCvcValid(cvc)) {
    lcvc.textContent = "000";
  }
  if (!required(cvc)) {
    lcvc.textContent = "000";
  }
});

//ERRROR MESSAGE
const showError = (input, message) => {
  const inputField = input.parentElement;

  inputField.classList.remove("succes");
  inputField.classList.add("error");

  const error = inputField.querySelector("span");
  error.textContent = message;
};

//SUCCESS MESSAGE
const showSuccess = (input) => {
  const inputField = input.parentElement;

  inputField.classList.remove("error");
  inputField.classList.add("success");

  const error = inputField.querySelector("span");
  error.textContent = "";
};

//CARDNAME
const checkName = () => {
  let valid = false;
  //const min = 3, max = 20;
  const name = cardName.value.trim();

  if (!required(name)) {
    showError(cardName, "Username cannot be blank");
  } else if (!isNameValid(name)) {
    showError(cardName, "Wrong format");
  } else {
    showSuccess(cardName);
    valid = true;
  }
  return valid;
};

//CARDNUMBER
const checkNumber = () => {
  let valid = false;
  const number = cardNumber.value.trim();

  if (!required(number)) {
    showError(cardNumber, "Can't be blank");
  } else if (!isNumberValid(number)) {
    showError(cardNumber, "Wrong format, numbers only.");
  } else {
    showSuccess(cardNumber);
    valid = true;
  }
  return valid;
};

//MONTH
const checkMonth = () => {
  let valid = false;
  const month = cardMonth.value.trim();

  if (!required(month)) {
    showError(cardMonth, "Can't be blank");
  } else if (!isMonthValid(month)) {
    showError(cardMonth, "Month is not valid.");
  } else {
    showSuccess(cardMonth);
    valid = true;
  }
  return valid;
};

//YEAR
const checkYear = () => {
  let valid = false;
  const year = cardYear.value.trim();

  if (!required(year)) {
    showError(cardYear, "Can't be blank");
  } else if (!isYearValid(year)) {
    showError(cardYear, "Year is not valid.");
  } else {
    showSuccess(cardYear);
    valid = true;
  }
  return valid;
};

//CVC
const checkCvc = () => {
  let valid = false;
  const cvc = cardCvc.value.trim();

  if (!required(cvc)) {
    showError(cardCvc, "Can't be blank");
  } else if (!isCvcValid(cvc)) {
    showError(cardCvc, "Cvc is not valid.");
  } else {
    showSuccess(cardCvc);
    valid = true;
  }
  return valid;
};

//Validate Form
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isNameValid = checkName(),
    isNumberValid = checkNumber(),
    isMonthValid = checkMonth(),
    isYearValid = checkYear(),
    isCvcValid = checkCvc();

  let isFormValid =
    isNameValid && isNumberValid && isMonthValid && isYearValid && isCvcValid;

  if (isFormValid) {
    form.classList.add("hide");
    test.classList.remove("hide");
  }
});
