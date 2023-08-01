// countAllPaarl.test.js

const countAllPaarl = require('./countAllPaarl');

// Test cases for the countAllPaarl function
describe('countAllPaarl', () => {
  // Test when there are registration numbers from Paarl
  it('should return the correct count for registration numbers from Paarl', () => {
    const registrationNumbers = 'CA 123, CJ 456, CJ 789, CA 012, CJ 345';
    expect(countAllPaarl(registrationNumbers)).toBe(3);
  });

  // Test when all registration numbers are from Paarl
  it('should return the correct count when all registration numbers are from Paarl', () => {
    const registrationNumbers = 'CJ 123, CJ 456, CJ 789';
    expect(countAllPaarl(registrationNumbers)).toBe(3);
  });

  // Test when no registration numbers are from Paarl
  it('should return 0 when no registration numbers are from Paarl', () => {
    const registrationNumbers = 'CA 123, CA 456, CA 789';
    expect(countAllPaarl(registrationNumbers)).toBe(0);
  });

  // Test with an empty registration numbers string
  it('should return 0 when the registration numbers string is empty', () => {
    const registrationNumbers = '';
    expect(countAllPaarl(registrationNumbers)).toBe(0);
  });

  // Test with non-numeric registration numbers
  it('should handle non-numeric registration numbers and return the correct count', () => {
    const registrationNumbers = 'CJ 123, AB 456, CJ 789, CD 012, CJ 345';
    expect(countAllPaarl(registrationNumbers)).toBe(3);
  });

  // Test with leading/trailing spaces
  it('should ignore leading and trailing spaces in registration numbers', () => {
    const registrationNumbers = '  CJ 123  ,  CJ 456   ,   CJ 789  ';
    expect(countAllPaarl(registrationNumbers)).toBe(3);
  });
});
