function reverseString(string) {
    // Convert the input string to an array of characters
    const charArray = string.split('');
  
    // Reverse the array of characters using the built-in reverse() method
    const reversedCharArray = charArray.reverse();
  
    // Convert the reversed array of characters back to a string and return it
    const reversedString = reversedCharArray.join('');
  
    return reversedString;
  }
  
  module.exports = reverseString;