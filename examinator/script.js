/**Vamos a poner un boton de examen y se va a cargar un examen
 * 
 * 
 */

console.log('Script cargado correctamente')

let button = document.getElementById('btnCargar')
console.log(button)
button.onclick=atenderBotonCargar
let iPregunta2=document.getElementById('iPregunta2')
/**onblur Es un elemento que se dispara cuando pierde el foco(El foco es cuando el borde esta rodeado de azul) */

iPregunta2.onblur=comprobarPregunta2

function atenderBotonCargar(){
    console.log('Evento Pillado')
    let divExamen = document.getElementById('divExamen')
    let divCargador = document.getElementById('divCargador')
    divCargador.style.display='none'
    divExamen.style.display='block'
}

function comprobarPregunta2(){
    let valor= iPregunta2.value
    if(valor !==5)
        alert('Eres mongolo')
}