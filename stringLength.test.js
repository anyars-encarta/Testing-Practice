const stringLength = require('./stringLength'); // Get the function from the stringLength.js file

describe('stringLength', () => {
  it('returns the correct character count for a valid string', () => {
    expect(stringLength('Hello')).toBe(5);
    expect(stringLength('Test')).toBe(4);
  });

  it('throws an error for a non-string input', () => {
    expect(() => stringLength(42)).toThrow('Input must be a string');
    expect(() => stringLength(null)).toThrow('Input must be a string');
    expect(() => stringLength(undefined)).toThrow('Input must be a string');
    expect(() => stringLength({ key: 'value' })).toThrow('Input must be a string');
  });

  it('throws an error for an empty string', () => {
    expect(() => stringLength('')).toThrow('String length must be between 1 and 10 characters');
  });

  it('throws an error for a string longer than 10 characters', () => {
    expect(() => stringLength('ThisIsALongString')).toThrow('String length must be between 1 and 10 characters');
  });
});
