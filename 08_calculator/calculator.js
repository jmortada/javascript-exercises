const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((sum, curr) => sum + curr, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, curr) => product * curr, 1);
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(fac) {
  let product = 1;
  for (let i = fac; i > 1; i--) {
    product *= i;
  }
  return product;
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
