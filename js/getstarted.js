document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submitButton");
  const form = document.getElementById("infoForm");
  const serviceSelect = document.getElementById("service");
  const infoSubmitBtn = document.getElementById("infoSubmitBtn");
  const propertySubmitBtn = document.getElementById("propertySubmitBtn");
  const passwordBTN = document.getElementById("passwordBTN");
  const propertyForm = document.getElementById("propertyForm");
  const passwordForm = document.getElementById("passwordForm");
  const emailForm = document.getElementById("emailForm");

  submitButton.addEventListener("click", function () {
    const selectedService = serviceSelect.value;
    if (selectedService) {
      serviceSelect.style.display = "none";
      submitButton.style.display = "none";
      form.style.display = "block";
    }
  });

  infoSubmitBtn.addEventListener("click", function () {
    propertyForm.style.display = "block";
    form.style.display = "none";
  });

  propertySubmitBtn.addEventListener("click", function () {
    passwordForm.style.display = "block";
    propertyForm.style.display = "none";
  });

  passwordBTN.addEventListener("click", function () {
    emailForm.style.display = "block";
    passwordForm.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".email-form .email-form-button")
    .addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "/index.html";
    });
});
