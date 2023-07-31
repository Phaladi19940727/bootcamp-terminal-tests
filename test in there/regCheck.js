// regCheck.js
module.exports = function () {
  // Function logic here

  // Example function implementation
  function regCheck(regNumber, regLocation) {
    return regNumber.endsWith(regLocation);
  }

  return {
    regCheck: regCheck,
    // Add other functions here
  };
};

  