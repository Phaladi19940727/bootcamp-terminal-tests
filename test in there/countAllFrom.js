// countAllFromTown.js

// Function to count how many registration numbers are from a specific town
function countAllFromTown(registrationNumbers, town) {
    const townPrefix = `${town} `;
    return registrationNumbers
      .split(',')
      .map(regNumber => regNumber.trim())
      .filter(regNumber => regNumber.startsWith(townPrefix))
      .length;
  }
  
  module.exports = countAllFromTown;
  