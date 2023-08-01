// totalPhoneBill.test.js
var assert = require("assert");
var totalPhoneBillModule = require("../totalPhoneBill");

var totalPhoneBill = totalPhoneBillModule().totalPhoneBill;

describe("Total Phone Bill", function () {
  it("should calculate the total cost for the given bill string", function () {
    var billString = "call, sms, call, sms, sms";
    assert.strictEqual(totalPhoneBill(billString), "R7.45");
  });

  it("should handle an empty bill string", function () {
    assert.strictEqual(totalPhoneBill(""), "R0.00");
  });

  it("should calculate the total cost for a bill with multiple calls and SMSes", function () {
    var billString = "call, call, call, sms, sms, call, sms";
    assert.strictEqual(totalPhoneBill(billString), "R15.15");
  });

  it("should handle a bill with only calls", function () {
    var billString = "call, call, call";
    assert.strictEqual(totalPhoneBill(billString), "R8.25");
  });

  it("should handle a bill with only SMSes", function () {
    var billString = "sms, sms, sms, sms";
    assert.strictEqual(totalPhoneBill(billString), "R2.60");
  });
  // Add more test cases here
});
