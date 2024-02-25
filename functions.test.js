const { capitalize, reverseString, calculator, caesarCipher, analyzeArray } = require('./functions');

test('capitalize first character', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('reverse a string', () => {
  expect(reverseString('hello')).toBe('olleh');
});

describe('calculator', () => {
  test('add two numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });
  test('subtract two numbers', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });
  test('multiply two numbers', () => {
    expect(calculator.multiply(2, 4)).toBe(8);
  });
  test('divide two numbers', () => {
    expect(calculator.divide(8, 2)).toBe(4);
  });
});

test('caesar cipher with wrapping and punctuation', () => {
  expect(caesarCipher('a.z', 1)).toBe('b.a');
  expect(caesarCipher('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
});

test('analyze an array of numbers', () => {
  const analysis = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(analysis).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});
