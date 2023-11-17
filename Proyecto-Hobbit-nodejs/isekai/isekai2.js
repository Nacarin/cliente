import { EscenaIsekai } from './escena_isekai.js'
import { EscenaIsekai3 } from './isekai3.js'

/**
 * Clase que representa la segunda escena en el mundo isekai.
 */
export class EscenaIsekai2 extends EscenaIsekai {
  /**
     * Crea una instancia de EscenaIsekai2.
     * @param {Aventura} aventura - La aventura en curso.
     * @param {AventuraIsekai} aventuraIsekai - La instancia de AventuraIsekai asociada a la escena.
     */
  constructor (aventura, aventuraIsekai) {
    const titulo = 'Un encuentro inesperado'
    const desc = 'Bilbo, Gandalf y Thorin entran en la escuela.'
    super(titulo, desc, aventura, aventuraIsekai)
  }

  /**
     * Inicia la escena y muestra la descripción y diálogos.
     */
  iniciarEscena () {
    this.limpiarPantalla()
    this.mostrarTitulo()
    this.mostrarDescripcion()

    // Cambiar a la escena Isekai3 al hacer clic en el botón
    document.getElementById('cambiarEscena').onclick = () => {
      const escenaIsekai3 = new EscenaIsekai3(this.aventura, this.aventuraIsekai)
      escenaIsekai3.iniciarEscena()
    }

    this.aventura.thorin.hablar('¿Se supone que esto es una escuela? Es muy diferente a como son las enanas.')
    this.aventura.bilbo.hablar('Mi querido Gandalf, ¿dónde estamos? Esto no se parece en nada a la Comarca.')
    this.aventura.gandalf.hablar('Mis amigos, parece que hemos sido transportados a otro mundo. No tengo todas las respuestas, pero debemos adaptarnos y tomar decisiones sabias.')
    this.aventura.bilbo.hablar('Pues será mejor que salgamos al exterior de nuevo, aquí dentro no me siento cómodo.')
  }
}
