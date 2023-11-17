import { EscenaIsekai } from './escena_isekai.js'
import { EscenaIsekai6 } from './isekai6.js'

/**
 * Clase que representa la quinta escena en el mundo isekai.
 */
export class EscenaIsekai5 extends EscenaIsekai {
  /**
     * Crea una instancia de EscenaIsekai5.
     * @param {Aventura} aventura - La aventura en curso.
     * @param {AventuraIsekai} aventuraIsekai - La instancia de AventuraIsekai asociada a la escena.
     */
  constructor (aventura, aventuraIsekai) {
    const titulo = 'Enfrentamiento con la Mafia Clandestina'
    const desc = 'Nuestros aventureros se ven atrapados en un enfrentamiento con la mafia clandestina que los ha descubierto.'
    super(titulo, desc, aventura, aventuraIsekai)
  }

  /**
     * Inicia la escena y muestra la descripción y diálogos.
     */
  iniciarEscena () {
    this.limpiarPantalla()
    this.mostrarTitulo()
    this.mostrarDescripcion()

    // Avanzar a la siguiente escena
    document.getElementById('cambiarEscena').onclick = () => this.avanzarEscenaSiguiente()

    this.aventura.bilbo.hablar('Miren, tienen objetos metálicos como el mío. Voy a preguntarles para ver si saben lo que es.')
    this.aventura.gandalf.hablar('Espera Bilbo, recuerda que esa cosa es peli...')
    this.aventura.narrador.hablar('Pero era tarde. Bilbo había echado a correr hacia ellos con la pistola en la mano.')

    this.simularEnfrentamiento()
  }

  /**
     * Simula un enfrentamiento con la mafia clandestina y muestra el diálogo resultante.
     */
  simularEnfrentamiento () {
    this.aventura.bilbo.hablar('¡Perdónenme, un momento!')
    this.aventura.narrador.hablar('Los mafiosos al girarse vieron a un policía ridículamente pequeño yendo hacia ellos con una pistola en la mano.')
    this.aventura.narrador.hablar('En ese momento, uno de ellos sacó su propia pistola y le disparó a Bilbo entre los ojos.')

    this.aventura.thorin.hablar('¡BILBOOOOO!')
    this.aventura.narrador.hablar('Thorin se lanzó hacia ellos, pero Gandalf lo cogió de la chaqueta y lo puso a salvo detrás de la esquina, mientras los mafiosos comenzaron a dispararles.')

    this.aventura.thorin.hablar('¿Qué haces, Gandalf? Tenemos que ir a por Bilbo. Esa magia extraña le ha dado de lleno y no se mueve.')
    this.aventura.gandalf.hablar('¡Tranquilízate! Si corremos hacia ellos así sin más, nos ocurrirá lo mismo.')
  }

  /**
     * Avanza a la siguiente escena.
     */
  avanzarEscenaSiguiente () {
    const escenaSiguiente = new EscenaIsekai6(this.aventura, this.aventuraIsekai)
    escenaSiguiente.iniciarEscena()
  }
}
