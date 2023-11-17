import { EscenaIsekai1 } from './isekai1.js'

/**
 * Clase que representa una aventura en el mundo isekai.
 */
export class AventuraIsekai {
  /**
     * Inicia la aventura en el mundo isekai.
     * @param {Aventura} aventura - La aventura que se inicia.
     */
  iniciarSuenho (aventura) {
    // Creamos una instancia de EscenaIsekai1 para la aventura y la actual instancia de AventuraIsekai.
    const escenaIsekai1 = new EscenaIsekai1(aventura, this)

    // Iniciamos la escena.
    escenaIsekai1.iniciarEscena()
  }
}
