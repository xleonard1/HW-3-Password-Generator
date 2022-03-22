// Assignment Code
var generateBtn = document.querySelector("#generate");
var Length = 8
var lowercaseChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberChar = ['0','1','2','3','4','5','6','7','8','9'];
var specialChar = ['!','@','#','$','%','^','&','*','(','_','-','+','=','{','}','[',']',';',':','`~','<','?','/','|'];





// password Generator
function generatePassword () {
 var randomPassword = [];
 var usableCharacters = [];  
 var confirmLength = window.prompt('How many characters would you like to use?');
 if (confirmLength < 8) {
   window.alert('length must be greater than or equal to 8');
 } else if (confirmLength > 128) {
   window.alert('length must be less than 128.');
 } else {
   //confirm special characters
   var confirmSpecialCharacters = window.confirm('would you like to include lowercase, uppercase, numeric, and/or special characters');
  }

// confirm SpecialCharacters
if (confirmSpecialCharacters) {
   var confirmUpper = window.confirm('would you like to include uppercase characters?');
   if (confirmUpper) { usableCharacters.push(...uppercaseChar)}  
   console.log(uppercaseChar)
   // confirm lowercase characters
   var confirmLower = window.confirm('would you like to include lowercase characters?');
   if(confirmLower) { usableCharacters.push(...lowercaseChar)} 
   console.log(lowercaseChar)

   //confirm get random number
   var confirmNumber = window.confirm('would you like to include numeric characters?');
   if (confirmNumber) { usableCharacters.push(...numberChar)} 
   console.log(numberChar)

   // confirm get special character
   var confirmSpecial = window.confirm('would you like to include special characters?');
   if(confirmSpecial) { usableCharacters.push(...specialChar)}
   console.log(usableCharacters);


   for (i = 0; i < Length; i++) {
     randomIndex = Math.floor(Math.random() * usableCharacters.length);
    randomPassword += usableCharacters[randomIndex];
  

  };
};

return randomPassword;
 
};





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);