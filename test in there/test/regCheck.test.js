// regCheck.test.js
var assert = require("assert");
var regCheckModule = require("../regCheck");

var regCheck = regCheckModule().regCheck;

describe("Reg Check", function () {
  it("should return true for a registration number from Gauteng (GP)", function () {
    assert.strictEqual(regCheck("DC 123 GP", "GP"), true);
  });

  it("should return true for a registration number from Limpopo (L)", function () {
    assert.strictEqual(regCheck("BB 987 L", "L"), true);
  });

  it("should return false for a registration number not from Western Cape (CAW)", function () {
    assert.strictEqual(regCheck("CN 876 EC", "CAW"), false);
  });

  it("should return false for an empty registration number", function () {
    assert.strictEqual(regCheck("", "GP"), false);
  });

  it("should return false for an empty registration location", function () {
    assert.strictEqual(regCheck("DC 123 GP", ""), false);
  });
  // Add more test cases here
});

