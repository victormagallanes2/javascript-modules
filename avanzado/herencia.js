'use strict'


class Persona {
	constructor (nombre, direccion){
		this.nombre = nombre
		this.direccion = direccion		
	}

	function1(){
		console.log(this.nombre +" "+ this.direccion)
	}
}


class Empleado extends Persona {
    constructor(self, sueldo, cargo, nombre_empleado, direccion_empleado){
    	super(nombre_empleado, direccion_empleado)
        this.sueldo = sueldo
        this.cargo = cargo
  	}

    function2(){
    	this.function1()
        console.log(this.sueldo + " " + this.cargo)
    }
}

		



const obj2 = new Empleado("tomas", "sucasa", "100000","programmer")
console.log(obj2.function2())
		