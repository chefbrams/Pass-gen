// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var randArr;

function generatePassword() {
  var passLength = prompt("How many characters would you like your password between 8 and 128?");
  console.log(passLength);
  // loops until conditions are met
  while (passLength < 8 || passLength > 128) {
    alert("The password is too short/long; please try again!");
    var passLength = prompt("How many characters would you like your password between 8 and 128?");
  }
  var passNumber = confirm("Would you like numbers in your password?");
  console.log(passNumber)
  var passUpper = confirm("Would you like Upper Case characters in your password?");
  var passLower = confirm("Would you like lower case characters in your password?");
  var passSpecial = confirm("Would you like special characters in your password?");

  var arrNumber = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  var arrUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var arrLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var arrChar = ['!', '@', '#', '%', '^', '&', '*', '(', ')', '_', '+', '=', '~', '`'];
  //arrays of available options to generate passcode
  if (passUpper) {
    randArr = arrUpper;
    console.log(randArr);
  }

  else if (passLower) {
    randArr = arrLower;
    console.log(randArr);
  }




  //use for loop to pick a random char from available options 

  // inside loop concat the random char to randPass




  // outside loop lastly just return randPass 
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
