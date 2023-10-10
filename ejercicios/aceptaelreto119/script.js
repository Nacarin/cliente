let ficheros=['datos_entrada.txt']
ficheros.forEach(f=>{cargarFichero(f)})

function cargarFichero(respuesta){
	fetch('datos_entrada.txt') // Carga el fichero
		.then(respuesta => respuesta.text()) // Obtiene el texto del archivo
		.then(calculo) // Llama a la función calculo con los datos del archivo
}

//let nSoldados=35

function calculo(datos){
    let nSoldados=datos.split("\r\n")
    while (nSoldados!=0){
        let escudosFinales=0
        do{		
            let i = Math.floor(Math.sqrt(nSoldados))
            let nEscudos=(i*i)+(4*2)+((i-2)*4)
            escudosFinales+=nEscudos
            nSoldados=nSoldados-(i*i)
        }while(Math.floor(Math.sqrt(nSoldados)>0))   
        console.log("Escudos Finales:", escudosFinales)  
    }
}


    


/*
#include<stdio.h>
#include <math.h>
int nSoldados,nEscudos,i,escudosFinales;

main(){	
	scanf("%d",&nSoldados);	
	while (nSoldados!=0){
		escudosFinales=0;
		do{		
			i= (int)sqrt(double(nSoldados));
			nEscudos=(i*i)+(4*2)+((i-2)*4);
			escudosFinales=nEscudos+escudosFinales;
			nSoldados=nSoldados-(i*i);
			nEscudos=0;	
		}while(sqrt(nSoldados)>0);
		printf("%d\n",escudosFinales);
		scanf("%d",&nSoldados);	
	}	
}
*/    