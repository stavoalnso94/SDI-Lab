//alert("JavaScript works!");

// Gustavo Alonso
// September 23, 2014
// SDI 1409
// SDI Lab 9

// Global Variables
var formNumber = 3;
var decimNumber = 1;
var winBreakDay = "21";
var date1 = "3/17/2015";
var date2 = "3/16/2015";


// Problem 1
var mathMethods = function(formatNumber, decimalNumber) {
	var finalNumber = formNumber.toFixed(decimNumber);
	return finalNumber;
};

// Problem 2
var mathMethods2 = function() {
	var convertedNum = parseFloat(winBreakDay);
	return convertedNum;
};

// Problem 3
var mathMethods3 = function(date1,date2,myString) {
	var dateA = new Date(date1);
	var dateB = new Date(date2);
	var dateDiff = dateA - dateB;
	if (myString === "hours") {
		console.log("The amout of hours from " + date2 + " to " + date1 + " are " + ((dateDiff / 1000) / 60) / 60) /24;
	} else if (myString === "days") {
		console.log("The amount of days from " + date2 + " to " + date1 + " are " + (((dateDiff / 1000) / 60) / 60) / 24) / 2;
	} else {
		console.log("Invalid input info");
	}
};

// Main Code Problem 1
var test = mathMethods(formNumber, decimNumber);
console.log("My GPA in school is: ", test);
// Main Code Problem 2
var test2 = mathMethods2();
console.log("Next year I will turn ", test2);
// Main Code Problem 3
var myString = prompt("Enter: days or hours");
mathMethods3(date1,date2,myString);
