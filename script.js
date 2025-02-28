document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const firstName = form.querySelector("input[placeholder='First name here']");
  const lastName = form.querySelector("input[placeholder='Last name here']");
  const email = form.querySelector("input[placeholder='Email here']");
  const phone = form.querySelector("input[placeholder='Phone number']");
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navbar = document.querySelector(".navbar");

  form.addEventListener("submit", function (event) {
    let valid = true;

    // Clear previous error messages
    form.querySelectorAll(".error").forEach(function (error) {
      error.remove();
    });

    // Validate first name
    if (firstName.value.trim() === "") {
      showError(firstName, "First name is required");
      valid = false;
    }

    // Validate last name
    if (lastName.value.trim() === "") {
      showError(lastName, "Last name is required");
      valid = false;
    }

    // Validate email
    if (!validateEmail(email.value.trim())) {
      showError(email, "Valid email is required");
      valid = false;
    }

    // Validate phone number
    if (!validatePhone(phone.value.trim())) {
      showError(phone, "Valid phone number is required");
      valid = false;
    }

    if (!valid) {
      event.preventDefault();
    }
  });

  function showError(input, message) {
    const error = document.createElement("div");
    error.className = "error";
    error.style.color = "red";
    error.textContent = message;
    input.parentElement.appendChild(error);
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function validatePhone(phone) {
    const re = /^\d{10}$/;
    return re.test(phone);
  }

  // Toggle navbar visibility on hamburger menu click
  hamburgerMenu.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
});

