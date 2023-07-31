// findOver.test.js

const findItemsOver = require('./findItemsOver');

// Test cases for the findItemsOver function
describe('findItemsOver', () => {
  // Test when there are items over the limit
  it('should return items over the limit', () => {
    const items = [10, 20, 5, 30, 15];
    const limit = 15;
    expect(findItemsOver(items, limit)).toEqual([20, 30]);
  });

  // Test when there are no items over the limit
  it('should return an empty array when no items are over the limit', () => {
    const items = [5, 8, 10];
    const limit = 15;
    expect(findItemsOver(items, limit)).toEqual([]);
  });

  // Test with negative limit
  it('should return all items when the limit is negative', () => {
    const items = [1, 2, 3];
    const limit = -1;
    expect(findItemsOver(items, limit)).toEqual([1, 2, 3]);
  });

  // Test with empty items array
  it('should return an empty array when items array is empty', () => {
    const items = [];
    const limit = 10;
    expect(findItemsOver(items, limit)).toEqual([]);
  });

  // Test with non-numeric items
  it('should handle non-numeric items and return items over the limit', () => {
    const items = [10, 'apple', 20, 'banana', 30, 'orange'];
    const limit = 15;
    expect(findItemsOver(items, limit)).toEqual([20, 30]);
  });
});

