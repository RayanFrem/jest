function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  function reverseString(string) {
    return string.split('').reverse().join('');
  }
  
  const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
  };
  
  function caesarCipher(string, shift) {
    return string.split('').map(char => {
      if (!char.match(/[a-z]/i)) return char;
      let code = char.charCodeAt();
      let base = (code >= 65 && code <= 90) ? 65 : 97;
      return String.fromCharCode(((code - base + shift) % 26) + base);
    }).join('');
  }
  
  function analyzeArray(array) {
    return {
      average: array.reduce((acc, val) => acc + val, 0) / array.length,
      min: Math.min(...array),
      max: Math.max(...array),
      length: array.length
    };
  }
  
  module.exports = { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
  