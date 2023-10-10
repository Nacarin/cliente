import { razaEnano } from "./clase_raza.js"
import { Personaje } from "./personaje.js"

export class Enano extends Personaje{

    static rey='Thorin Escudo de roble'/*Este atributo pertenece a la clase */
    static alabarAlRey(){
        document.getElementById('divHistoria').innerHTML +='Viva' +Enano.rey
    }

    #colorBarba=null

    constructor(nombre,clase=null,colorBarba='Blanca'){
        super(nombre,razaEnano,clase)
        this.#colorBarba=colorBarba
    }
    picar(){

    }
}