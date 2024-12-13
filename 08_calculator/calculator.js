const add = function(adder, addend) {
  return adder + addend;
};

const subtract = function(minuend, subtrahend) {
	return minuend - subtrahend;
};

const sum = function(array) {
  let sum = 0;
	array.forEach(element => {
    sum += element;
  });
  return sum;
};

const multiply = function(array) {
  let product= 1;
	array.forEach(element => {
    product *= element;
  });
  return product;
};

const power = function(base, exponent) {
	return Math.pow(base,exponent);
};

const factorial = function(num) {
	if(num < 0) {
    return -1;
  } else if (num === 0) {
    return 1;
  } else {
    return num * factorial(num-1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
