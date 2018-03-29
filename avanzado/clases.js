'use stect'


class Operaciones {
	constructor (num1, num2){
      	this.num1 = num1
		this.num2 = num2

	}
	suma() {
		return this.num1 + this.num2
	}
		

	resta() {
		return this.num1 - this.num2
	}
		

}


obj = new Operaciones(3, 7)
console.log(obj.suma())
console.log(obj.resta())
