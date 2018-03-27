"use strict"

var variable1 = 5;
var variable2 = 5;
var result;

if (variable1 > variable2){
    result = "es verdadero";
    console.log("son verdadero");
}

else if (variable1 === variable2) {
	result = "son iguales";
    console.log("son iguales");
}

else {
	result = "es falso";
	console.log("es falso");
}

switch (result) {
	case "es verdadero":
		console.log("es verdadero")
	    break;
	case "son iguales":
		console.log("son iguales")
	    break;
	case "es falso":
		console.log("es falso")
	    break;
}