document.getElementById("loginBTN").addEventListener("click", function() {
  // Redirect to the dashboard page
  window.location.href = "/dashboard.html";
});

document.addEventListener("DOMContentLoaded", function() {
  // Get the password input element
  var passwordInput = document.getElementById("password");
  // Get the show password checkbox
  var showPasswordCheckbox = document.getElementById("showPassword");

  // Add event listener to toggle password visibility
  showPasswordCheckbox.addEventListener("change", function() {
    if (this.checked) {
      // If checkbox is checked, show password
      passwordInput.type = "text";
    } else {
      // If checkbox is not checked, hide password
      passwordInput.type = "password";
    }
  });
});
