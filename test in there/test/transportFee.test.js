// transportFee.js
module.exports = function () {
    // Function logic here
  
    // Example function implementation
    function transportFee(shift) {
      switch (shift) {
        case "morning":
          return "R20";
        case "afternoon":
          return "R10";
        case "nightshift":
          return "free";
        default:
          return "Invalid shift";
      }
    }
  
    return {
      transportFee: transportFee,
      // Add other functions here
    };
  };
  