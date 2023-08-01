// isWeekday.js
module.exports = function () {
// Function to check if a given day of the week is a weekday (Monday to Friday)
function isWeekDay(day) {
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  return weekdays.includes(day);
}

module.exports = isWeekDay;
}
