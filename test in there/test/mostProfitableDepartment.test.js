// mostProfitableDepartment.test.js
var assert = require("assert");
var mostProfitableDepartmentModule = require("../mostProfitableDepartment");

var mostProfitableDepartment = mostProfitableDepartmentModule()
  .mostProfitableDepartment;

describe("Most Profitable Department", function () {
  it("should return the most profitable department from sales data", function () {
    var salesData = [
      { department: "Outdoor", sales: 2000 },
      { department: "Hardware", sales: 5500 },
      { department: "Outdoor", sales: 1500 },
      { department: "Hardware", sales: 4000 },
    ];
    assert.strictEqual(mostProfitableDepartment(salesData), "Hardware");
  });

  it("should return the department with maximum sales if only one department is present", function () {
    var salesData = [
      { department: "Outdoor", sales: 2000 },
      { department: "Outdoor", sales: 1500 },
      { department: "Outdoor", sales: 3000 },
    ];
    assert.strictEqual(mostProfitable
