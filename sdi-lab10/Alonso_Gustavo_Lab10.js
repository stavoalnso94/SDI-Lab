//alert("JavaScript works!");

// Gustavo Alonso
// September 25, 2014
// SDI 1409
// Lab 10

// Global Variables
var multiple1 = 0;
var sum = 0;
var multiple2 = 0;
var generator = [];
var powerBallnum = [];

// Problem 1

function multiplyMethod() {
for(var i = 0; i < 200; i++) {
	multiple1 = 5 * i;
	console.log(sum = multiple1);	
};
for(var x = 0; x < 334; x++){
	multiple2 = 3 * x;
	console.log(sum = multiple2);
}
return sum;
};

// Problem 2

var powerBallfunction = function () {

for (var z = 1; z < 59; z++) {
generator.push(z);
}
powerBallnum = Math.round(Math.random() * 34 + 1);
while (generator.length > 5) {
generator.splice(Math.floor(Math.random() * generator.length), 1);
}
return "The random numbers are: " + generator + " The powerball number is:" + powerBallnum;
};

// Main Code Problem 1
multiplyMethod();
console.log("Sum for multiples of 5 = ", multiple1, " Sum of multiples of 3: ", multiple2);

// Main Code Problem 2
console.log(powerBallfunction());
powerBallfunction();

