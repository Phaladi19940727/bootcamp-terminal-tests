/// findItemsOver.js

// Function to find items in an array that are over a given limit
function findItemsOver(items, limit) {
    return items.filter(item => item > limit);
  }
  
  module.exports = findItemsOver;
  