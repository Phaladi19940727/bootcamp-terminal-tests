// countAllFromTown.test.js

const countAllFromTown = require('./countAllFromTown');

// Test cases for the countAllFromTown function
describe('countAllFromTown', () => {
  // Test when there are registration numbers from the town
  it('should return the correct count for registration numbers from the town', () => {
    const registrationNumbers = 'CA 123, CY 456, CA 789, CY 012, CA 345';
    const town = 'CA';
    expect(countAllFromTown(registrationNumbers, town)).toBe(3);
  });

  // Test when all registration numbers are from the town
  it('should return the correct count when all registration numbers are from the town', () => {
    const registrationNumbers = 'CA 123, CA 456, CA 789';
    const town = 'CA';
    expect(countAllFromTown(registrationNumbers, town)).toBe(3);
  });

  // Test when no registration numbers are from the town
  it('should return 0 when no registration numbers are from the town', () => {
    const registrationNumbers = 'CY 123, CY 456, CY 789';
    const town = 'CA';
    expect(countAllFromTown(registrationNumbers, town)).toBe(0);
  });

  // Test with an empty registration numbers string
  it('should return 0 when the registration numbers string is empty', () => {
    const registrationNumbers = '';
    const town = 'CA';
    expect(countAllFromTown(registrationNumbers, town)).toBe(0);
  });

  // Test with non-numeric registration numbers
  it('should handle non-numeric registration numbers and return the correct count', () => {
    const registrationNumbers = 'CA 123, AB 456, CA 789, CD 012, CA 345';
    const town = 'CA';
    expect(countAllFromTown(registrationNumbers, town)).toBe(3);
  });
});
