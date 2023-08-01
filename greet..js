// greet.js
module.exports = function () {
  function greet(name) {
    return "Hello, " + name + "!";
  }

  return {
    greet: greet,
  };
};
