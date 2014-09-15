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
var add = function(x, op, y) {
	
	console.log(x + op + y);
	
	var addValue = x + y;
	
	return addValue;

};

// Main code
console.log("Today we will be doing some mathematical operations");

x = parseFloat(prompt("Enter first number"));

op = prompt("Enter function");

y = parseFloat(prompt("Enter second number"));


if(op == "+"){
	
	var addResult = add(x, op, y);
	console.log(addResult);
	

}



