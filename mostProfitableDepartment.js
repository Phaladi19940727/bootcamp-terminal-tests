// mostProfitableDepartment.js
module.exports = function () {
    // Function logic here
  
    // Example function implementation
    function mostProfitableDepartment(salesData) {
      if (salesData.length === 0) return null;
  
      // Initialize an object to store the total sales for each department
      var departmentSales = {};
  
      // Calculate total sales for each department
      salesData.forEach(function (sale) {
        if (departmentSales[sale.department] === undefined) {
          departmentSales[sale.department] = sale.sales;
        } else {
          departmentSales[sale.department] += sale.sales;
        }
      });
  
      // Find the department with the maximum sales
      var maxSales = 0;
      var mostProfitableDept = null;
  
      for (var department in departmentSales) {
        if (departmentSales[department] > maxSales) {
          maxSales = departmentSales[department];
          mostProfitableDept = department;
        }
      }
  
      return mostProfitableDept;
    }
  
    return {
      mostProfitableDepartment: mostProfitableDepartment,
      // Add other functions here
    };
  };
// mostProfitableDepartment.js
module.exports = function () {
  // Function logic here

  // Example function implementation
  function mostProfitableDepartment(salesData) {
    if (salesData.length === 0) return null;

    // Initialize an object to store the total sales for each department
    var departmentSales = {};

    // Calculate total sales for each department
    salesData.forEach(function (sale) {
      if (departmentSales[sale.department] === undefined) {
        departmentSales[sale.department] = sale.sales;
      } else {
        departmentSales[sale.department] += sale.sales;
      }
    });

    // Find the department with the maximum sales
    var maxSales = 0;
    var mostProfitableDept = null;

    for (var department in departmentSales) {
      if (departmentSales[department] > maxSales) {
        maxSales = departmentSales[department];
        mostProfitableDept = department;
      }
    }

    return mostProfitableDept;
  }

  return {
    mostProfitableDepartment: mostProfitableDepartment,
    // Add other functions here
  };
};
  
  