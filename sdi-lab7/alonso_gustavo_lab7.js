//alert("JavaScript works!");

// Gustavo Alonso
// September 18, 2014
// SDI 1409
// Lab 7 

var myCar = {
	
	make: 	       "Nissan",
	color: 		   "White",
	model:         2007,
	topSpeed: 	   160,
	currentSpeed:  0,
	
// Method 1
 getAccel: function(increase){
 	
 	
 	var  accelerate = this.currentSpeed + increase;
 
 	
 	if(increase > this.topSpeed){
 		this.currentSpeed = this.currentSpeed + increase;
 			console.log(myCar.make + myCar.model + "'s" + " speed is " + myCar.topSpeed);
 	} else {
 			console.log("My " + myCar.make + " " + myCar.model + " current speed is " + accelerate + " mph ");
 	}
 	
 		for (var i = 0; i < 3; i++) {
 			console.log("My " + myCar.make + " is going " + accelerate++ + "mph, and increasing.");
 			}
 		return accelerate;
 },
  	
// Method 2 
	getDecel: function(decrease) {
		
		var decelerate = decrease - this.currentSpeed;
		
		if(decrease < this.currentSpeed) {
			this.currentSpeed = decrease - this.currentSpeed;
			console.log("My " + myCar.make + myCar.model + "'s'" + " speed is " + myCar.currentSpeed);
		} else {
			console.log("My " + myCar.make  + " " + myCar.model + "'s" + " speed is " + decrease + " and slowing.");
		}
		 for(i = 0; i < 3; i++) {
		 	console.log("My " + myCar.model + "'s'" + " speed is now " + decelerate-- + "mph, and decreasing.");
		 }
		return decelerate;
		}
};
 
myCar.getAccel(155);
myCar.getDecel(11);

