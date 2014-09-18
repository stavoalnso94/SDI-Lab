//alert("JavaScript works!");

// Gustavo Alonso
// SDI 1409
// September 16, 2014
// Lab 6 

var arrayFunction = function() {
	var states = ["Tennessee", "California", "Florida", "Texas"];
 	
	var cities = ["Memphis", "Los Angeles", "Miami", "Houston"];
	
	var gaVar = "Georgia";
	var aVar = "Atlanta";
	
	states.push(gaVar);
	cities.push(aVar);
	


	
	for (var i = 0; i < states.length; i++) {
		console.log(cities[i] + ", " + states[i]);
	}

	console.log("I added " + gaVar);
	console.log("Then I added " + aVar);

	
	var gaVar = states.pop();
	var aVar  = cities.pop();

	//console.log(cities);
	//console.log(states);
};

arrayFunction();