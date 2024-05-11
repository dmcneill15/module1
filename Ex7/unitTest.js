//Exercise 7

//this function returns the sum of two numbers
function sum(a, b) {
  return a + b;
}

//this functions returns the subraction of two numbers
function subtract(a, b) {
  return b - a;
}

//this function returns the multiplication of two numbers
function multiply(a, b) {
  return a * b;
}

//this function returns the division of two numbers
function divide(a, b) {
  return a / b;
}

//this functions returns the concatination of Hello and a given name
function greetings(name) {
  return "Hello ".concat(name);
}

//unit tests
//first test to check how the error is thrown

if (sum(10, 20) != 30) {
  console.log("Error: function sum(): 10+20 !=30");
} else console.log("Sum function passes");

if (subtract(10, 20) != 10) {
  console.log("Error: function subtract(): 20-10!=10");
} else console.log("Subtract function passes");

if (subtract(20, 10) < 0) {
  console.log("Warning: function subtract() evaluates to negative:20>10");
} else console.log("Subtract function passes");

//alternative from class
let result = sum(10, 20);
console.log("Should return 10+20 = 30 : " + (result == 30 ? 'pass' : 'fail' ));

result = divide(20,10);
console.log("Expecting 20/10=2 : " + (result == 2 ? 'pass' : 'fail'));
//if result == 2, show pass, else show fail

// example to force a fail
result = multiply(2,3);
console.log("Expecting2*3=6 : " + (result == 7? 'pass' : 'fail'));

/*
console.log(sum(4, 5));
console.log(subtract(4, 5));
console.log(multiply(4, 5));
console.log(divide(4, 5));
console.log(greetings("Danielle"));
*/
