//alert("JavaScript works!");

// Gustavo Alonso
// September 13, 2014
// SDI 1409
// Lab 5

// Variables
var x;
var op;
var y;



// Functions
// var add = function(x, op, y) {
// 	
	// console.log(x + op + y);
// 	
	// var addValue = x + y;
// 	
	// return addValue;
// 
// };

var subtract = function(x, op, y) {
	
	console.log(x + op + y);
	
	var subValue = x - y;
	
	return subValue;
	
	
};

// var divide = function(x, op, y) {
// // 	
	// console.log(x + op + y);
// 
	// var divValue = x / y;
// 		
	// return divValue;
// };
// 
// var multiply = function(x, op, y) {
// 	
	// console.log(x + op + y);
// 	
	// var mulValue = x * y;
// 	
	// return mulValue;
// 	
// };

// Main code
console.log("Today we will be doing some mathematical operations");

x = parseFloat(prompt("Enter first number"));

op = prompt("Enter function");

y = parseFloat(prompt("Enter second number"));


// if (op == "*") {
// 	
// 	
	// var mulResult = multiply(x, op, y);
// 	
	// console.log(mulResult);
// 	
// } else if(op == "/"){
// 	
	// var divResult = divide(x, op, y);
// 	
	// console.log(divResult);
// 	
// 
// } else 
if(op == "-"){
	
	var subResult = subtract(x, op, y);
	
	console.log(subResult);}
	
	
// } else if(op == "+"){
// 	
	// var addResult = add(x, op, y);
	// console.log(addResult);
// 	
// 
// }



