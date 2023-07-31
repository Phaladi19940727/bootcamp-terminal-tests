// findItemsOver20.test.js

const findItemsOver20 = require('./findItemsOver20');

// Test cases for the findItemsOver20 function
describe('findItemsOver20', () => {
  // Test when there are items over 20
  it('should return items over 20', () => {
    const items = [10, 25, 30, 15, 40];
    expect(findItemsOver20(items)).toEqual([25, 30, 40]);
  });

  // Test when there are no items over 20
  it('should return an empty array when no items are over 20', () => {
    const items = [5, 8, 10];
    expect(findItemsOver20(items)).toEqual([]);
  });

  // Test with negative numbers and zero
  it('should return only positive numbers over 20', () => {
    const items = [-5, 0, 10, 30, -15, 25];
    expect(findItemsOver20(items)).toEqual([30, 25]);
  });

  // Test with empty items array
  it('should return an empty array when items array is empty', () => {
    const items = [];
    expect(findItemsOver20(items)).toEqual([]);
  });

  // Test with non-numeric items
  it('should handle non-numeric items and return numbers over 20', () => {
    const items = [10, 'apple', 20, 'banana', 30, 'orange'];
    expect(findItemsOver20(items)).toEqual([30]);
  });
});

