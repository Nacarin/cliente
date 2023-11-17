/*
httpbin.org
Parametros de path
Multi path:
Parametros de query
Parametros por body:Una vez hemos enviado la peticion mandamos el cuerpo

La informacion que mando tiene que ir codificada por url

Nos pueden responder con un texto,con un json,con un xml o bien con un error

Los parametros get usan path y query,delete tambien
POST PUT Y PATH tambien usan el body

*/
console.log('Script cargado correctamente')

import{Rest} from './servicios/rest.js'

window.onload=() => new Controlador()

class Controlador{
    constructor(){
        //Referencias de interfaz
        this.btnGet=document.querySelectorAll('button')[0]

        //Asociacion de eventos
        this.btnGet.onclick=this.llamarGET
    }

    llamarGET = () =>{
        Rest.get('http://migueljaque.com/evg/2daw/dwec/api/php/datos_get.php',{'param1': 42,'param2':'Miguel'}, this.verResultadoGET)}
        verResultadoGET(respuesta){
            console.log('Resultado GET:' ,respuesta)
        }
}


function iniciar(){
    peticionGET(fun1)
    peticionPOST(fun2)
    //peticionPUT(fun3)
    document.getElementByTagName('button')[0].onclick = enviarFichero
    console.log('Yo me ejecuto antes')
}

function peticionGET(callback){
    fetch('http://httpbin.org/get?param1=hola&param2=42')
    .then(respuesta => respuesta.json())
    .then(objeto => {
        if (objeto.args.param2==="42")
            callback()
    })
}

function peticionPOST(callback){
    const formData=new FormData()
    formData.append('param1','Come sano')
    formData.append('param2',17)

    const opciones={
        method:'POST',
        body:formData
    }

    fetch('http://httpbin.org/post',opciones)
    .then(respuesta => respuesta.json())
    .then (objeto => {
        if (objeto.form.param2 === "17")
            callback()
    })

}

/*
function peticionPUT(callback){
    const opciones ={
        method:'PUT'
    }

    fetch('http://httpbin.org/put/param1/hola/param2/41',opciones)
    .then(respuesta => respuesta.json())
    .then(objeto => console.log(objeto))
}
*/

function enviarFichero(){
    const iFile= document.querySelector('input[type="file"]')

    let reader =new FileReader()
    reader.onload =(evento) =>{
        let fichero =evento.target.result
        console.log(fichero)
        const formData=new FormData()
        formData.append('ficherito',fichero)
        const opciones={
            method:'POST',
            body:formData
        }
        fetch('http://micasa.com/cogerFichero',opciones)
    }
    reader.readAsText(iFile.files[0])
}

function fun1(){
    console.log('Viva mi mare')
}

function fun2(){
    console.log('Viva mi pare')
}

function fun3(){
    console.log('Viva mi abuela')
}