// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// all code added to generatePassword() function to allow it to run in the page
// if statement ensures user input matches requirements
// confirmation of characters used for password 
function generatePassword() {
  var passwordLength = prompt(
    "How many characters would you like in your password?"
  );
  if (passwordLength >= 8 && passwordLength <= 128) {
    var capitalLetters = confirm("Would you like capital letters?");

    var lowerCaseLetters = confirm("Would you like lowercase letters?");

    var numbers = confirm("Would you like numbers?");

    var specialSymbols = confirm("Would you like special symbols?");

  } else if (passwordLength < 8 || passwordLength > 128) {
    alert("Please specify a number between 8 and 128");
    
  } if (
    !capitalLetters &&
    !lowerCaseLetters &&
    !numbers &&
    !specialSymbols
  ) {
    alert("please select atleast one option");
    return generatePassword();
  }
  // Available characters stored in empty variable charSet 
  var charSet = "";
  if (capitalLetters) {
    charSet += "ABCDEFGHIJKLMNOPQRSTUVQXYZ";
  }

  if (lowerCaseLetters) {
    charSet += "abcdefghijkkmnopqrstuvqxyz";
  }

  if (numbers) {
    charSet += "0123456789";
  }

  if (specialSymbols) {
    charSet += "!#$%&'()*+,-./:;<=>?@][^_`{|}~";
  }
  // For loop to add characters to variable password 
  // Characters returned to password variable
  // Executed on page in lines 5-8 of script.js
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var random = Math.floor(Math.random() * charSet.length);
    password += charSet[random];
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
