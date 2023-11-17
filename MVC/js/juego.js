/**
 * juego.js es el Controlador Principal de la Aplicacion.
 * Controla la Aplicacion
 */
console.log('Script cargado correctamente')
import {Vista1} from './vistas/vista1.js'

window.onload = () => {new Juego()}

class Juego{

    constructor(){
        this.vista1=new Vista1(this)
        this.iniciar()
    }
    iniciar(){
        this.vista1.play()
    }
    irAVista2(){
        console.log('TRON:yendo a vista2')
    }

    
}