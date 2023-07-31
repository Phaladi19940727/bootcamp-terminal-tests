// countRegNumber.test.js

const countRegNumber = require('./countRegNumber');

// Test cases for the countRegNumber function
describe('countRegNumber', () => {
  // Test with multiple registration numbers
  it('should return the correct count for multiple registration numbers', () => {
    const registrationNumbers = 'CA 123, CY 456, CA 789, CY 012, CA 345';
    expect(countRegNumber(registrationNumbers)).toBe(5);
  });

  // Test with a single registration number
  it('should return 1 when there is only one registration number', () => {
    const registrationNumbers = 'CA 123';
    expect(countRegNumber(registrationNumbers)).toBe(1);
  });

  // Test with an empty registration numbers string
  it('should return 0 when the registration numbers string is empty', () => {
    const registrationNumbers = '';
    expect(countRegNumber(registrationNumbers)).toBe(0);
  });

  // Test with non-numeric registration numbers
  it('should handle non-numeric registration numbers and return the correct count', () => {
    const registrationNumbers = 'CA 123, AB 456, CA 789, CD 012, CA 345';
    expect(countRegNumber(registrationNumbers)).toBe(5);
  });

  // Test with leading/trailing spaces
  it('should ignore leading and trailing spaces in registration numbers', () => {
    const registrationNumbers = '  CA 123  ,  CY 456   ,   CA 789  ';
    expect(countRegNumber(registrationNumbers)).toBe(3);
  });
});
