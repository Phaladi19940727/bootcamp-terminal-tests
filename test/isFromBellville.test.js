// isFromBellville.test.js

const isFromBellville = require('./isFromBellville');

// Test cases for the isFromBellville function
describe('isFromBellville', () => {
  // Test registration number starting with 'CY' (from Bellville)
  it('should return true for a registration number from Bellville', () => {
    expect(isFromBellville('CY 123456')).toBe(true);
  });

  // Test registration number not starting with 'CY' (not from Bellville)
  it('should return false for a registration number not from Bellville', () => {
    expect(isFromBellville('CA 789012')).toBe(false);
  });

  // Test empty registration number (not from Bellville)
  it('should return false for an empty registration number', () => {
    expect(isFromBellville('')).toBe(false);
  });

  // Test registration number with leading/trailing spaces (from Bellville)
  it('should return true for a registration number with leading/trailing spaces from Bellville', () => {
    expect(isFromBellville('   CY 456789   ')).toBe(true);
  });

  // Test registration number with leading/trailing spaces (not from Bellville)
  it('should return false for a registration number with leading/trailing spaces not from Bellville', () => {
    expect(isFromBellville('   CA 123456   ')).toBe(false);
  });
});
