let rounded = 0;
const convertToCelsius = function(fahrenheit) {
  rounded = (fahrenheit - 32) * (5 / 9);
  return Number(rounded.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  rounded = celsius * (9 / 5) + 32;
  return Number(rounded.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
