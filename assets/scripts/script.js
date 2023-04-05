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
  
  /* function is used to validate the user input and ensure that it is either 'Y' or 'N'. 
  It returns true if the user entered 'Y', and false if the user entered 'N'. */
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

  // Prompts to determine character types to include in the password
  var useLowercase = validateInput("Should the password contain lowercase characters? Type 'Y' yes or 'N' for no.");
  var useUppercase = validateInput("Should the password contain uppercase characters? Type 'Y' yes or 'N' for no.");
  var useNumeric = validateInput("Should the password contain numbers? Type 'Y' yes or 'N' for no.");
  var useSpecialCharacters = validateInput("Should the password contain special characters? Type 'Y' yes or 'N' for no.");

  if (!useLowercase && !useUppercase && !useNumeric && !useSpecialCharacters) {
    return '';
  }

  // Generate the password using the selected character types
  while (generatedPassword.length < passwordLength) {
    // Lowercase character
    if (useLowercase) {
      generatedPassword += lowercaseCharacters[Math.floor(Math.random() * lowercaseCharacters.length)];
    }
    // Uppercase character
    if (useUppercase) {
      generatedPassword += uppercaseCharacters[Math.floor(Math.random() * uppercaseCharacters.length)];
    }
    // Numeric character
    if (useNumeric) {
      generatedPassword += numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
    }
    // Special character
    if (useSpecialCharacters) {
      generatedPassword += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }
  }

  // Return the generated password, limited to the password length
  return generatedPassword.slice(0, passwordLength);
}

// Function to write the generated password to the DOM
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to the generate button to call the writePassword function when clicked
generateBtn.addEventListener("click", writePassword);

