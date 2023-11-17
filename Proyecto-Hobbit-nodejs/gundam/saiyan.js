import { razaSaiyan as raza, claseGuerrero as clase } from '../clase_raza.js'
import { Personaje } from '../personaje.js'

export class Saiyan extends Personaje {
  constructor (nombre) {
    super(nombre, raza, clase)
  }

  genkiDama () {
    const textoGenkiDama = `<br/><i>${this.nombre} lanza una Genki-dama y muere todo el mundo</i>`
    document.getElementById('divHistoria').innerHTML += textoGenkiDama
  }
}
