//const capitalize = require('./capitalize');

// Test 1: Check if the first character is capitalized
test('capitalize the first character of the string', () => {
  const input = 'hello';
  const expectedOutput = 'Hello';

  const result = capitalize(input);

  expect(result).toBe(expectedOutput);
});

// Test 2: Check if already capitalized string remains the same
test('already capitalized string should remain the same', () => {
  const input = 'Hello';
  const expectedOutput = 'Hello';

  const result = capitalize(input);

  expect(result).toBe(expectedOutput);
});

// Test 3: Check if an empty string remains empty
test('empty string remains empty', () => {
  const input = '';
  const expectedOutput = '';

  const result = capitalize(input);

  expect(result).toBe(expectedOutput);
});

// Function to Capitalize the first character of a string
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  //module.exports = capitalize;
  