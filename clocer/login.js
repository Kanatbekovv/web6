let loginForm = document.querySelector(".my-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  window.location.href = "index.html"; 
  
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let emailError = email.nextElementSibling;
  let isValid = true;
  emailError.textContent = "";
  if (isValid) {
    console.log("Email:", email.value);
    console.log("Password:", password.value);
   
 
  }

});
