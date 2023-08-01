// yearsAgo.js
module.exports = function () {
  // Function logic here

  // Example function implementation
  function yearsAgo(year) {
    var currentYear = new Date().getFullYear();
    return currentYear - year;
  }

  return {
    yearsAgo: yearsAgo,
    // Add other functions here
  };
};
