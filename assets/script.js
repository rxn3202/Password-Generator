/*
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Password generator function
function generatePassword(){
  var generatedPassword = '';
  
  // Character arrays
  var lowercaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var uppercaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var specialCharacters = ['!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\'',']','^','_','`','{','|','}','~'];
  var numericCharacters = ['0','1','2','3','4','5','6','7','8','9'];


  // Password length prompt
  var passwordLength = parseInt(window.prompt("How long will your password be? Please choose a password length of at least 8 characters and no more than 128 characters.", "Enter a password length e.g. '8'"));
  // Password length validation
  while (!(parseInt(passwordLength)>=8 && parseInt(passwordLength)<=128)){
    passwordLength = parseInt(window.prompt("Your input was invalid! Please try again. How long will your password be? Please choose a password length of at least 8 characters and no more than 128 characters", "Enter a password length e.g. '8'"));
  }

  console.log('Password length: ',passwordLength);

  while (i===0){    
    // Lowercase characters prompt
    var lowercaseConfirm = window.prompt("Should the password contain lowercase characters? Type 'Y' yes or 'N' for no.", "'Y' or 'N'").toUpperCase();
    // Lowercase characters validation
    while (!(lowercaseConfirm==='Y'||lowercaseConfirm==='N')){
      lowercaseConfirm = window.prompt("Your input was invalid! Please try again. Should the password contain lowercase characters? Type 'Y' yes or 'N' for no.", "'Y' or 'N'").toUpperCase();
    }
    // Add to counter if 'Y' is selected
    if (lowercaseConfirm==='Y'){
      i++;
    }

    // Uppercase characters prompt
    var uppercaseConfirm = window.prompt("Should the password contain uppercase characters? Type 'Y' yes or 'N' for no.", "'Y' or 'N'").toUpperCase();
    // Uppercase characters validation
    while (!(uppercaseConfirm==='Y'||uppercaseConfirm==='N')){
      uppercaseConfirm = window.prompt("Your input was invalid! Please try again. Should the password contain uppercase characters? Type 'Y' yes or 'N' for no.", "'Y' or 'N'").toUpperCase();
    }
    // Add to counter if 'Y' is selected
    if (uppercaseConfirm==='Y'){
      i++;
    }

    // Numeric characters prompt
    var numericConfirm = window.prompt("Should the password contain numbers? Type 'Y' yes or 'N' for no.", "'Y' or 'N'").toUpperCase();
    // Numeric characters validation
    while (!(numericConfirm==='Y'||numericConfirm==='N')){
      numericConfirm = window.prompt("Your input was invalid! Please try again. Should the password contain numbers? Type 'Y' yes or 'N' for no.", "'Y' or 'N'").toUpperCase();
    }
    // Add to counter if 'Y' is selected
    if (numericConfirm==='Y'){
      i++;
    }

    // Special characters prompt
    var specialCharactersConfirm = window.prompt("Should the password contain special characters? Type 'Y' yes or 'N' for no.", "'Y' or 'N'").toUpperCase();
    // Special characters validation
    while (!(specialCharactersConfirm==='Y'||specialCharactersConfirm==='N')){
      specialCharactersConfirm = window.prompt("Your input was invalid! Please try again. Should the password contain special characters? Type 'Y' yes or 'N' for no.", "'Y' or 'N'").toUpperCase();
    }
    // Add to counter if 'Y' is selected
    if (specialCharactersConfirm==='Y'){
      i++;
    }
  }

  // Generate the password
  while (j<parseInt(passwordLength)){
    // Choose a random lowercase character
    if (lowercaseConfirm==='Y'){
      generatedPassword = generatedPassword.concat(lowercaseCharacters[(Math.floor(Math.random()*lowercaseCharacters.length))]);
      j++;
    }

    // Choose a random uppercase character
    if (uppercaseConfirm==='Y'){
      generatedPassword = generatedPassword.concat(uppercaseCharacters[(Math.floor(Math.random()*uppercaseCharacters.length))]);
      j++;
    }

    // Choose a random number
    if (numericConfirm==='Y'){
      generatedPassword = generatedPassword.concat(numericCharacters[(Math.floor(Math.random()*numericCharacters.length))]);
      j++;
    }

    // Choose a random special character
    if (specialCharactersConfirm==='Y'){
      generatedPassword = generatedPassword.concat(specialCharacters[(Math.floor(Math.random()*specialCharacters.length))]);
      j++;
    }
  }

  // Return the generated password to the writePassword() function
  return generatedPassword;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


*/




var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let generatedPassword = '';
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
