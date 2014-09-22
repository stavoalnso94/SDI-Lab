//alert("JavaScript works!");

// Gustavo Alonso
// September 20, 2014
// SDI 1409
// Lab 8

// Problem 1
var myEmail =  "theonly1@hotmail.com";

var emailCase = function() {
	
};

// Main Code

email = prompt("Enter the email address:", "theonly1@hotmail.com");
	
	if (email.lastIndexOf("@") > email.indexOf("@")) {
		console.log("No match");
	} else if(email.indexOf("@", " ", ".") < 1) {
			console.log("No match");
	 } else{
				console.log("This is correct!");
	}
emailCase(myEmail);
 
 // Problem 2
 
var fullName = "John Roanoke";

var slash = "/";

var nameCase = function(myString) {
	var titleArray;
	titleArray = myString.split(" ");
	console.log(titleArray);
};

// Main Code

nameCase(fullName + slash);
