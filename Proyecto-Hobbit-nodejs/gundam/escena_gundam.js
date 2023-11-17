import { Escena } from '../escenas.js'

export class EscenaGundam extends Escena {
  aventuraGundam = null
  constructor (titulo, desc, aventura, aventuraGundam) {
    super(titulo, desc, aventura)
    this.aventuraGundam = aventuraGundam
  }
}
