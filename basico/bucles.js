'use strict'

var variable1;
var variable2 = 5;

for (variable1 = 0; variable1 < variable2; variable1++ ){
	console.log("variable1", variable1)
}

variable1 = 0;
while (variable1 < variable2) {
	console.log("variable1 con while", variable1);
	variable1++;
}

var variable3 = 4;

do {
    console.log("variable con do while");
    variable3--;
}

while (variable3 >=1);
