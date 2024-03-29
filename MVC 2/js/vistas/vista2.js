import {Vista} from "./vista.js"

export class Vista2 extends Vista{
   constructor(controlador,base){
    super(controlador,base)
    this.crearInterfaz()
   }

   crearInterfaz(){
    //Boton
    this.btnVerVista3=document.createElement('button')
    this.base.appendChild(this.btnVerVista3)
    this.btnVerVista3.textContent='Pulsame'
    this.btnVerVista3.onclick=()=>{
        this.controlador.verVista(Vista.VISTA3)
    }
    //Parrafo con las vidas
    this.pVidas=document.createElement('p')
    this.base.appendChild(this.pVidas)

   }
   mostrar(ver){
    console.log("Vidas")
    let vidas=this.controlador.getVidas()

    this.pVidas.textContent="Tienes "+vidas+" vidas."
    super.mostrar(ver)

   }
}