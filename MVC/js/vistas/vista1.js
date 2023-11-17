
import{Pausa} from './componentes/pausa.js'

export class Vista1{
    constructor(controlador){
        this.controlador=controlador
        this.imgFondo=new Image()
        this.imgFondo.src='./img/tatooine1.webp'
        this.pausa=new Pausa()
    }

    play(){
        let imgFondo=document.createElement('img')
        imgFondo.src=this.imgFondo.src
        document.body.appendChild(imgFondo)

        //Creamos el texto de presentacion
        let p1=document.createElement('p')
        document.body.appendChild(p1)

        p1.textContent=texto1
        p1.style.position='absolute'
        p1.style.top='300px'
        p1.style.left ='500px'

        this.pausa.esperarA(this.controlador.irAVista2)

        


    }

    
}

const texto1='Vives en un solitario planeta en el ultimo rincon de la galaxia'