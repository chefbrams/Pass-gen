// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passReturn = prompt("How many characters would you like your password between 8 and 128?");
  console.log(passReturn);
  var passNumber = confirm("Would you like numbers in your password?");
  console.log(passNumber)
  var passUpper = confirm("Would you like Upper Case characters in your password?");
  var passLower = confirm("Would you like lower case characters in your password?");
  var passSpecial = confirm("Would you like special characters in your password?");


}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
