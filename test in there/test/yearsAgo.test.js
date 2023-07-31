// yearsAgo.test.js
var assert = require("assert");
var yearsAgoModule = require("../yearsAgo");

var yearsAgo = yearsAgoModule().yearsAgo;

describe("Years Ago", function () {
  it("should return 1 for the year 2022", function () {
    assert.strictEqual(yearsAgo(2022), 1);
  });

  it("should return 5 for the year 2018", function () {
    assert.strictEqual(yearsAgo(2018), 5);
  });

  it("should return 0 for the current year", function () {
    var currentYear = new Date().getFullYear();
    assert.strictEqual(yearsAgo(currentYear), 0);
  });

  it("should return a negative value for a future year", function () {
    assert.ok(yearsAgo(2030) < 0);
  });
  // Add more test cases here
});

