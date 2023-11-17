import { Escena } from '../escenas.js'
import { Aventura } from '../aventura.js'

/**
 * Clase que representa una escena en el mundo isekai.
 */
export class EscenaIsekai extends Escena {
  /**
     * Crea una instancia de EscenaIsekai.
     * @param {string} titulo - El título de la escena.
     * @param {string} desc - La descripción de la escena.
     * @param {Aventura} aventura - La aventura a la que pertenece la escena.
     * @param {AventuraIsekai} aventuraIsekai - La instancia de AventuraIsekai asociada a la escena.
     */
  constructor (titulo, desc, aventura, aventuraIsekai) {
    super(titulo, desc, aventura)
    this.aventuraIsekai = aventuraIsekai
  }
}
