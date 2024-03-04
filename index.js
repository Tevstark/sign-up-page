document.addEventListener("DOMContentLoaded", function () {
  let password = document.querySelector("#password");
  let confirmPassword = document.querySelector("#confirm-password");
  let btn = document.querySelector("#submit-form");

  btn.addEventListener("click", () => {
    if (password.value === confirmPassword.value) {
      alert("Passwords match.");
    } else {
      alert("Passwords don't match.");
    }
  });
});
