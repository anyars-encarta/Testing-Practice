const reverseString = require('./reverseString'); // Get function from the reverseString.js file

test('reverseString should reverse the input string', () => {
  // Test case 1: Reversing a simple string
  let result = reverseString('hello');
  expect(result).toBe('olleh');

  // Test case 2: Reversing a string with spaces
  result = reverseString('hello world');
  expect(result).toBe('dlrow olleh');

  // Test case 3: Reversing a string with special characters
  result = reverseString('@bcd&*');
  expect(result).toBe('*&dcb@');

  // Test case 4: Reversing an empty string
  result = reverseString('');
  expect(result).toBe('');

  // Test case 5: Reversing a string with a single character
  result = reverseString('a');
  expect(result).toBe('a');
});
