// countAllPaarl.js

// Function to count how many registration numbers are from Paarl (starts with 'CJ')
function countAllPaarl(registrationNumbers) {
    const registrationList = registrationNumbers.split(',');
    const count = registrationList.filter(registration => registration.trim().startsWith('CJ')).length;
    return count;
  }
  
  module.exports = countAllPaarl;
  