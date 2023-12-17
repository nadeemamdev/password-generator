// List (array) of special characters that can be included in the generated password
var possibleSpecialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// List (array) of numeric characters that can be included in the generated password
var possibleNumericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// List (array) of lowercase characters that can be included in the generated password
var possibleLowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// List (array) of uppercase characters that can be included in the generated password
var possibleUpperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Function to prompt the user for password options using the prompt and confirm dialogs 
function promptPasswordOptions() {
  let length;
// Validate the code based on input: While the length of the password is less than 8 characters or more than 120 characters, prompt the user to enter a password length that meets the criteria (between 8 and 120) 
  do {
    length = parseInt(prompt('Enter the length of the password you\'d like to generate (between 8 and 120):'));
  } while (isNaN(length) || length < 8 || length > 120);

// Ask the user to confirm what types of characters can be used to generate the password, using a confirm dialog
  const useLowercase = confirm('Include lowercase characters? \nClick:\n"OK" to say Yes\n"Cancel" to say No');
  const useUppercase = confirm('Include uppercase characters? \nClick:\n"OK" to say Yes\n"Cancel" to say No');
  const useNumbers = confirm('Include numeric characters? \nClick:\n"OK" to say Yes\n"Cancel" to say No');
  const useSpecial = confirm('Include special characters? \nClick:\n"OK" to say Yes\n"Cancel" to say No');

// Return the user's selection to be used later in the script 
  return {
    length,
    useLowercase,
    useUppercase,
    useNumbers,
    useSpecial
  };
}

// Function for getting a random element from the generated password array
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate a password based on the user's selection, using the return from the promptPasswordOptions function
function generatePassword() {
  const options = promptPasswordOptions();

// Start with an empty list (array), which will be added to based on the user's selection
  let allChars = [];

// When adding the user's selecton to the empty list, concatenate the multiple arrays into one array
  if (options.useLowercase) {
    allChars = allChars.concat(possibleLowerCasedCharacters);
  }

// When adding the user's selecton to the empty list, concatenate the multiple arrays into one array
  if (options.useUppercase) {
    allChars = allChars.concat(possibleUpperCasedCharacters);
  }

// When adding the user's selecton to the empty list, concatenate the multiple arrays into one array
  if (options.useNumbers) {
    allChars = allChars.concat(possibleNumericCharacters);
  }

// When adding the user's selecton to the empty list, concatenate the multiple arrays into one array
  if (options.useSpecial) {
    allChars = allChars.concat(possibleSpecialCharacters);
  }

// Validate the code based on input: If the user hasn't confirmed/allowed at least one character type to be used when generating the password, alert them to this fact, and ask them to try again 
  if (allChars.length === 0) {
    alert('At least one character type should be selected/confirmed. Please try again.');
    return null;
  }

// Loop through each index in the generated password, and generate a random character based on the user's selection
  let password = '';
  for (let i = 0; i < options.length; i++) {
    const randomChar = getRandom(allChars);
    password += randomChar;
  }

  return password;
}

// Create a reference to the "Generate Password" button
var generateBtn = document.querySelector('#generate');

// Write the generated password to the page, inside the placeholder box (dashed outline) 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Listen for clicks to the "Generate Password" button
generateBtn.addEventListener('click', writePassword);