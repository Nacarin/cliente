console.log('Cargando el script')

let ficheros=['d1.txt','d2.txt','d3.txt']

//Si no lleva corchetes hace automaticamente el return
//el metodo forEach de arrays coge y para cada 1 de los elementos del array se lo pasa a la siguiente funcion
ficheros.forEach(f=>{cargarFichero(f)})


function cargarFichero(respuesta){
	fetch('datos_entrada.txt') //carga el fichero
	.then(respuesta=>respuesta.text()) //saca el texto
	.then(fuction1) //pasa el texto a funcion1
}	
function fuction1(entrada){
	const listaventas=entrada.split("\r\n")
	let ventas=[]
	for(let i=0;i<listaventas.length;i++){
		if(listaventas[i]==='-1')
			break
		ventas[i]=+listaventas[i]
	}

	console.log(ventas)
	let diaMax = 'DOMINGO'
	let diaMin = 'DOMINGO'
	let supera = true
	let superaTexto = 'NO'
	if(supera)
		superaTexto = 'SI'

	console.log(diaMax,diaMin,superaTexto)
	//console.log(`${diaMax} ${diaMin} ${superaTexto}`)
}



/*
*1ºAnalisis

*Datos de entrada[numbre]
*Datos de salida[diaMax][diaMin][bolean]

*2ºEjemplos

*Entrada 6+1
*EJ1
185.50
250.36
163.45
535.20
950.22
450.38
-1

*Salida
SABADO JUEVES SI

*EJ2
1
2
3
4
5
6
7
8
9
10
11
12
-1

*Salida
Domingo Martes SI
Domingo Martes SI

*EJ3
300
1
1
1
1
2
-1

*Salida
Martes Miercoles NO // Como hay varios dias iguales ponermos el primero

*3ºAndamio //Programa funcioanando sin hacer nada

*4ºParseo
Coger los datos de entrada y pasarlos a los datos de salida

Tengo un string y quiero convertirlo en un array

*5ºProgramacion




*/