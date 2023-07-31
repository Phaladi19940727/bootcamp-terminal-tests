
// totalPhoneBill.js
module.exports = function () {
    // Function logic here
  
    // Example function implementation
    function totalPhoneBill(billString) {
      var calls = billString.split(", ").filter(item => item.startsWith('call')).length;
      var smses = billString.split(", ").filter(item => item.startsWith('sms')).length;
      var totalCost = calls * 2.75 + smses * 0.65;
      return "R" + totalCost.toFixed(2);
    }
  
    return {
      totalPhoneBill: totalPhoneBill,
      // Add other functions here
    };
  };