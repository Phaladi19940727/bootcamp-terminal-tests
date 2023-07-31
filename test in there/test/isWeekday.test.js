// isWeekday.test.js

const isWeekDay = require('./isWeekday');

// Test cases for the isWeekDay function
describe('isWeekDay', () => {
  // Test Monday (weekday)
  it('should return true for Monday', () => {
    expect(isWeekDay('Monday')).toBe(true);
  });

  // Test Tuesday (weekday)
  it('should return true for Tuesday', () => {
    expect(isWeekDay('Tuesday')).toBe(true);
  });

  // Test Wednesday (weekday)
  it('should return true for Wednesday', () => {
    expect(isWeekDay('Wednesday')).toBe(true);
  });

  // Test Thursday (weekday)
  it('should return true for Thursday', () => {
    expect(isWeekDay('Thursday')).toBe(true);
  });

  // Test Friday (weekday)
  it('should return true for Friday', () => {
    expect(isWeekDay('Friday')).toBe(true);
  });

  // Test Saturday (not a weekday)
  it('should return false for Saturday', () => {
    expect(isWeekDay('Saturday')).toBe(false);
  });

  // Test Sunday (not a weekday)
  it('should return false for Sunday', () => {
    expect(isWeekDay('Sunday')).toBe(false);
  });

  // Test invalid day of the week (not a weekday)
  it('should return false for an invalid day', () => {
    expect(isWeekDay('InvalidDay')).toBe(false);
  });
});
