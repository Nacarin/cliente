import {Objeto} from './objeto.js'
export class Personaje{
    #nombre=null/*#Indica que un atributo es privado */
    #raza=null
    #clase=null
    #inventario=null
    /*document es el documento que estamos usando,getElementById es para buscar un elemento por id
    innerHTML es el texto que hay dentro del div y concatenamos con el texto.
    */
   constructor(nombre,raza,clase=null){/*Usamos los constructores para iniciar los atributos del objeto*/
    this.#nombre=nombre
    this.#raza=raza
    this.#clase=clase
    this.#inventario=new Set()
   }

        hablar(texto){
            let textoMejorado = `<br/>${this.#nombre} "${texto}"`; /* Usar this.#nombre */
            document.getElementById('divHistoria').innerHTML += textoMejorado;
        }

    coger(objeto){
        this.#inventario.add(objeto)
    }
    pasar(objeto,personaje){
        if(!(objeto instanceof Objeto))
            throw 'Objeto invalido'
        if(!(personaje instanceof Personaje))
            throw 'Personaje invalido'
        this.#inventario.delete(objeto)
        personaje.coger(objeto)
    }
}



