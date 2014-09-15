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

var divide = function(x, op, y) {
	
	console.log(x + op + y);

	var divValue = x / y;
		
	return divValue;
};


// Main code
console.log("Today we will be doing some mathematical operations");

x = parseFloat(prompt("Enter first number"));

op = prompt("Enter function");

y = parseFloat(prompt("Enter second number"));

if(op == "/"){
	
	var divResult = divide(x, op, y);
	
	console.log(divResult);
}



