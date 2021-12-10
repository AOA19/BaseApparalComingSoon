const form = document.querySelector("#eform");
const email = document.querySelector("#email");
const icon = document.querySelector(".error-icon");
const error = document.querySelector(".error-msg");

// Regular Expression:
let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

// Email validation function:
function validate() {
  if (email.value.match(regExp)) {
    form.style.border = `solid 1px #cf9797`;
    icon.style.display = "none";
    error.style.display = "none";
  } else {
    form.style.border = "solid 2px #F76867";
    icon.style.display = "block";
    error.style.display = "block";
  }
  if (email.value == "") {
    form.style.border = "solid 2px #F76867";
    icon.style.display = "block";
    error.style.display = "block";
  }
}
