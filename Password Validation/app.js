var isvalidName = false;
var isvalidEmail = false;
var isvalidPassword = false;
var isvalidconfirmPassword = false;
function validateName() {
  var nameInput = document.getElementById("nameInput");
  var nameOutput = document.getElementById("nameOutput");
  var output = "";
  var namePattern = /^[a-zA-Z-\s]+$/;
  var nameIsValid = namePattern.test(nameInput.value);
  if (!nameIsValid) {
    output = "Name can contain only Alphabets, Spaces or hyphen(-)";
    nameOutput.className = "failed";
    isvalidName = false;
    nameInput.className = "outline";
  } else {
    nameOutput.className = "";
    isvalidName = true;
    nameInput.className = "";
  }
  nameOutput.innerHTML = output;
}

function validateEmail() {
  var emailInput = document.getElementById("emailInput");
  var emailOutput = document.getElementById("emailOutput");

  // Check each character in the email
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
  var emailIsValid = emailPattern.test(emailInput.value);
  var output = "";

  // Check if email is valid
  if (!emailIsValid && emailInput.value !== "") {
    output += "Please enter a valid email address.<br>";
    emailOutput.className = "failed";
    isvalidEmail = false;
    emailInput.className = "outline";
  } else {
    emailOutput.className = "";
    isvalidEmail = true;
    emailInput.className = "";
  }
  emailOutput.innerHTML = output;
}

function validatePassword() {
  var passwordInput = document.getElementById("passwordInput");
  var password = passwordInput.value;
  var passwordOutput = document.getElementById("passwordOutput");

  // Check each character in the password
  var hasNumber = /\d/.test(password);
  var hasSmallLetter = /[a-z]/.test(password);
  var hasCapitalLetter = /[A-Z]/.test(password);
  var hasSpecialChar = /[^\w\s]/.test(password);
  var output = "";

  // Validation rules
  if (!hasNumber) output += "Password must contain at least one number.<br>";

  if (!hasSmallLetter)
    output += "Password must contain at least one lowercase letter.<br>";

  if (!hasCapitalLetter)
    output += "Password must contain at least one uppercase letter.<br>";

  if (!hasSpecialChar)
    output += "Password must contain one special character.<br>";

  if (!isNaN(password[0])) output += "Password cannot begin with a number.<br>";

  if (password.length < 8)
    output += "Password must be at least 8 characters long.<br>";

  // Display validation results
  if (output === "") {
    passwordOutput.className = "";
    passwordInput.className = "";
    isvalidPassword = true;
  } else {
    passwordOutput.className = "failed";
    passwordInput.className = "outline";
    isvalidPassword = false;
  }
  passwordOutput.innerHTML = output;
}

function validateConfirmPassword() {
  var password = document.getElementById("passwordInput").value;
  var confirmPasswordInput = document.getElementById("passwordConfirm");
  var confirmPassword = confirmPasswordInput.value;
  var confirmPasswordOutput = document.getElementById("confirmPasswordOutput");
  var output = "";

  if (password == confirmPassword) {
    output = "";
    confirmPasswordOutput.className = "";
    confirmPasswordInput.className = "";
    isvalidconfirmPassword = true;
  } else {
    output = "Passwords don't match";
    confirmPasswordOutput.className = "failed";
    confirmPasswordInput.className = "outline";
    isvalidconfirmPassword = false;
  }
  confirmPasswordOutput.innerHTML = output;
}

function submitForm() {
  validateName();
  validateEmail();
  validatePassword();
  validateConfirmPassword();

  if (
    isvalidName == true &&
    isvalidEmail == true &&
    isvalidPassword == true &&
    isvalidconfirmPassword == true
  ) {
    alert("Your Account has been created successfully");
    document.getElementById("registrationForm").reset();
  } else alert("Please, Enter all the feilds with Valid Values");
}
