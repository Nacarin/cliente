import { Humano } from '../humano.js'
import { razaHumano as raza } from '../clase_raza.js'

export class Newtype extends Humano {
  constructor (nombre, clase = null) {
    super(nombre, raza, clase)
  }

  flash () {
    this.hablar('Siento una sensación extraña')
  }
}
