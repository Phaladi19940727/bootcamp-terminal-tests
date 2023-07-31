// fromWhere.js

// Function to determine the town based on the registration number
function fromWhere(registrationNumber) {
    if (registrationNumber.startsWith('CY')) {
      return 'Bellville';
    } else if (registrationNumber.startsWith('CJ')) {
      return 'Paarl';
    } else if (registrationNumber.startsWith('CA')) {
      return 'Cape Town';
    } else {
      return 'Some other place';
    }
  }
  
  module.exports = fromWhere;
  