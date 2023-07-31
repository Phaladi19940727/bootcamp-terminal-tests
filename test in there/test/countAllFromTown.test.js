// countAllFromTown.test.js

const countAllFromTown = require('./countAllFromTown');

// Test cases for the countAllFromTown function
describe('countAllFromTown', () => {
  // Test when some registration numbers are from the town
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
  
