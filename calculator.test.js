const Calculator = require('./calculator'); // Get class from calculator.js file

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    test('adds two positive numbers', () => {
      expect(calculator.add(3, 5)).toBe(8);
    });

    test('adds a positive number and zero', () => {
      expect(calculator.add(7, 0)).toBe(7);
    });

    test('adds two negative numbers', () => {
      expect(calculator.add(-2, -3)).toBe(-5);
    });
  });

  describe('subtract', () => {
    test('subtracts two positive numbers', () => {
      expect(calculator.subtract(8, 3)).toBe(5);
    });

    test('subtracts a positive number and zero', () => {
      expect(calculator.subtract(7, 0)).toBe(7);
    });

    test('subtracts two negative numbers', () => {
      expect(calculator.subtract(-2, -3)).toBe(1);
    });
  });

  describe('divide', () => {
    test('divides two positive numbers', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    test('divides a positive number by 1', () => {
      expect(calculator.divide(7, 1)).toBe(7);
    });

    test('throws error when dividing by zero', () => {
      expect(() => calculator.divide(4, 0)).toThrowError("Division by zero is not allowed");
    });
  });

  describe('multiply', () => {
    test('multiplies two positive numbers', () => {
      expect(calculator.multiply(5, 3)).toBe(15);
    });

    test('multiplies a positive number by zero', () => {
      expect(calculator.multiply(7, 0)).toBe(0);
    });

    test('multiplies two negative numbers', () => {
      expect(calculator.multiply(-2, -3)).toBe(6);
    });
  });
});
