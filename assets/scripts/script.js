// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Password generator function
function generatePassword() {
  let generatedPassword = '';
  // Character arrays
  var lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
  var uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var specialCharacters = '!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
  var numericCharacters = '0123456789';
  
  function validateInput(promptMessage) {
    let input;
    do {
      input = window.prompt(promptMessage, "'Y' or 'N'").toUpperCase();
    } while (input !== 'Y' && input !== 'N');
    return input === 'Y';
  }
  // Password length prompt
  var passwordLength = parseInt(prompt("How long will your password be? Please choose a password length of at least 8 characters and no more than 128 characters.", "Enter a password length e.g. '8'"));

  if (passwordLength < 8 || passwordLength > 128) {
    return '';
  }

  var useLowercase = validateInput("Should the password contain lowercase characters? Type 'Y' yes or 'N' for no.");
  var useUppercase = validateInput("Should the password contain uppercase characters? Type 'Y' yes or 'N' for no.");
  var useNumeric = validateInput("Should the password contain numbers? Type 'Y' yes or 'N' for no.");
  var useSpecialCharacters = validateInput("Should the password contain special characters? Type 'Y' yes or 'N' for no.");

  if (!useLowercase && !useUppercase && !useNumeric && !useSpecialCharacters) {
    return '';
  }

  while (generatedPassword.length < passwordLength) {
    if (useLowercase) {
      generatedPassword += lowercaseCharacters[Math.floor(Math.random() * lowercaseCharacters.length)];
    }
    // Choose a random uppercase character
    if (useUppercase) {
      generatedPassword += uppercaseCharacters[Math.floor(Math.random() * uppercaseCharacters.length)];
    }
    if (useNumeric) {
      generatedPassword += numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
    }
    if (useSpecialCharacters) {
      generatedPassword += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }
  }

  return generatedPassword.slice(0, passwordLength);
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

