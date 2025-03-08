"use strict";

const form = document.querySelector(".form");
const input = document.querySelector(".input--element");
const messageError = document.querySelector("#emailError");

const icon_Error = document.querySelector(".input--icon_Error");

const inputContainer = document.querySelector(".input");

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const value = input.value.trim();
  if (value === "") {
    messageError.textContent = "You need to add an Email";
    icon_Error.src = "icon-error.svg";
    inputContainer.classList.add("errorInput");
  } else if (!validateEmail(value)) {
    icon_Error.src = "icon-error.svg";
    inputContainer.classList.add("errorInput");
    messageError.textContent = "Please enter a valid email address";
  } else {
    inputContainer.classList.remove("errorInput");
    icon_Error.src = "";
    messageError.textContent = "";
    alert("Email is valid! Form submitted");
  }
});
