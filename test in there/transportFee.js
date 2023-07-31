// transportFee.test.js
var assert = require("assert");
var transportFeeModule = require("../transportFee");

var transportFee = transportFeeModule().transportFee;

describe("Transport Fee", function () {
  it("should return R20 for the morning shift", function () {
    assert.strictEqual(transportFee("morning"), "R20");
  });

  it("should return R10 for the afternoon shift", function () {
    assert.strictEqual(transportFee("afternoon"), "R10");
  });

  it("should return 'free' for the nightshift", function () {
    assert.strictEqual(transportFee("nightshift"), "free");
  });

  it("should return 'Invalid shift' for an unknown shift", function () {
    assert.strictEqual(transportFee("evening"), "Invalid shift");
  });
  // Add more test cases here
});
