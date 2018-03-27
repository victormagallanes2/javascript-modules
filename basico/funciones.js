'use strict'

var a = 3;
var b = 8;
var c = 2;

function suma(f, r){
	let z = f + r
	return z
}


function resta(f, r){
	return f - r
}
	

function suma_variante(a=2, b=8){
    let g = a + b
	return g
}


function multiplicacion(s, k){
	return s * k
}


// funcion anonima y arrow

var saludar = nombre => "Hola " + nombre;

console.log(saludar("Susana"));

var sumar = cantidad => cantidad + 10
console.log(sumar(10));

var calcular = (datoA, datoB) => datoA + datoB
console.log(calcular(10, 15));

var generar = (datoA, datoB) => {
    var datoC = 5;
    return datoA + datoB + datoC;
}
console.log(generar(10, 15));

var validar = () => {
    return 'Validación correcta';
}
console.log(validar())


console.log(suma(2, 2))
console.log(resta(b, c))
console.log(suma_variante())
var s = suma(2, 2)
var k = resta(b, c)
console.log(multiplicacion(s, k))


