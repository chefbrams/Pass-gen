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
  var passLength = parseInt(prompt("Please choose between 8 and 128 characters for your password"));
  console.log(passLength);
  // loops until conditions are met
  while (passLength < 8 || passLength > 128) {
    alert("The password is too short/long; please try again!")
    var passLength = parseInt(prompt("Please choose between 8 and 128 characters for your password"));
  }

  var passNumber = confirm("Would you like numbers in your password?");
  console.log(passNumber)
  var passUpper = confirm("Would you like upper case characters in your pass word?");
  var passLower = confirm("Would you like lower case characters in your password?");
  var passSpecial = confirm("Would you like special characters in your password?");

  // if nothing is confirmed
  while (passNumber === false && passSpecial === false && passUpper === false && passLower === false) {
    alert("One option must be chosen.  Please pick again!")
    var passNumber = confirm("Would you like numbers in your password?");
    console.log(passNumber)
    var passUpper = confirm("Would you like upper case characters in your password?");
    var passLower = confirm("Would you like lower case characters in your password?");
    var passSpecial = confirm("Would you like special characters in your password?");
  }
  // password arrays
  var arrNumber = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  var arrUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var arrLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var arrChar = ['!', '@', '#', '%', '^', '&', '*', '(', ')', '_', '+', '=', '~', '`'];
  //arrays of available options to generate passcode
  if (passUpper) {
    randArr = arrUpper;
    console.log(randArr);
  }

  if (passLower) {
    randArr = arrLower;
    console.log(randArr);
  }
  if (passSpecial) {
    randArr = arrChar;
    console.log(randArr);
  }
  if (passNumber) {
    randArr = arrNumber;
    console.log(randArr);
  }

  if (passLower && passUpper) {
    randArr = arrLower.concat(arrUpper);
    console.log(randArr);
  }
  if (passLower && passSpecial) {
    randArr = arrLower.concat(arrChar);
    console.log(randArr);
  }
  if (passLower && passNumber) {
    randArr = arrLower.concat(arrNumber);
    console.log(randArr);
  }
  if (passUpper && passNumber) {
    randArr = arrUpper.concat(arrNumber);
    console.log(randArr);
  }
  if (passUpper && passSpecial) {
    randArr = arrUpper.concat(arrChar);
    console.log(randArr);
  }
  if (passSpecial && passNumber) {
    randArr = arrChar.concat(arrNumber);
    console.log(randArr);
  }
  if (passLower && passUpper && passSpecial) {
    randArr = arrLower.concat(arrUpper, arrChar);
    console.log(randArr);
  }
  if (passNumber && passUpper && passSpecial) {
    randArr = arrNumber.concat(arrUpper, arrChar);
    console.log(randArr);
  }
  if (passLower && passNumber && passSpecial) {
    randArr = arrLower.concat(arrNumber, arrChar);
    console.log(randArr);
  }
  if (passLower && passUpper && passNumber) {
    randArr = arrLower.concat(arrUpper, arrNumber);
    console.log(randArr);
  }
  if (passLower && passUpper && passSpecial && passNumber) {
    randArr = arrLower.concat(arrUpper, arrChar, arrNumber);
    console.log(randArr);
  }
  var randPass = "";
  for (var i = 0; i < passLength; i++) {
    randPass += randArr[Math.floor(Math.random() * randArr.length)];
    // inside loop concat the random char to randPass

  }

  return randPass




  // outside loop lastly just return randPass 
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
