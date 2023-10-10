//Funciones

console.log(funcion1(40,2))
//Declaracion de funcion
function funcion1(param1,param2){
	let suma=param1+param2
	return suma
}
//llamada a la funcion
console.log(funcion1(40,2))
console.log(funcion1('zapato','verde'))

//Espresion de funcion
let miFuncion=function(arg1,arg2){return arg1-arg2}

/*if(true){
	let miFuncion=function(arg1,arg2){return arg1+arg2}
	console.log('blabla')
}
*/

let sumar=function(a,b){return a+b}
let restar=function(a,b){return a-b}

function operar(operacion,valor1,valor2){
	let resultado=operacion(valor1,valor2)
	console.log(resultado)
}

operar(sumar,6,5)
operar(restar,100,32)

//Callback
//Es una funcion que pasamos a otra funcion para que la llame cuando termine
//console.log(funcion1(40,2))


//funciones flecha
let fun3=(p1,p2)=>{return p1*7}
	console.log('Estoy ejecutando una funcion flecha')
	return p1*7
console.log(fun3(3))

let fun2=()=>{
	console.log('Estoy ejecutando una funcion flecha')
}
console.log(fun3(3))

consultaBD(7,8,(resultado)=>{console.log(resultado)})