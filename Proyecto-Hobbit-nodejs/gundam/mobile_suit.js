import { Personaje } from '../personaje.js'
import { Maquina } from './maquina.js'
import { mobileSuit as tipoMaquina } from './tipos_maquinas.js'

export class MobileSuit extends Maquina {
  #tipoMS = null
  #piloto = null
  constructor (nombre, tipo = null, piloto = null) {
    super(nombre, tipoMaquina)
    this.#tipoMS = tipo
    this.#piloto = piloto
  }

  pilotar (piloto) {
    if (piloto instanceof Personaje && this.#piloto == null) {
      this.#piloto = piloto
      const textoPiloto = `<br/><i>${this.#piloto.nombre} se monta en el ${this.nombre}</i>`
      document.getElementById('divHistoria').innerHTML += textoPiloto
    }
  }

  bajarse () {
    if (this.#piloto instanceof Personaje) {
      const textoBajarse = `<br/><i>${this.#piloto.nombre} se baja del ${this.nombre}</i>`
      document.getElementById('divHistoria').innerHTML += textoBajarse
      this.#piloto = null
    }
  }
}
