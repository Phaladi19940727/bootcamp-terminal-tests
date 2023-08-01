const assert = require('assert');
const greet = require('./greet'); // Update the path based on your file structure

// Test cases for greet function
describe('greet', function () {
  it('should greet a person with their name', function () {
    assert.strictEqual(greet('John'), 'Hello, John!');
    assert.strictEqual(greet('Jane'), 'Hello, Jane!');
  });

  it('should greet with an empty name', function () {
    assert.strictEqual(greet(''), 'Hello, !');
  });
});
