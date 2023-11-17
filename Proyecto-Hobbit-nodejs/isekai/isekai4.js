import { EscenaIsekai } from './escena_isekai.js'
import { EscenaIsekai5 } from './isekai5.js'

/**
 * Clase que representa la cuarta escena en el mundo isekai.
 */
export class EscenaIsekai4 extends EscenaIsekai {
  /**
     * Crea una instancia de EscenaIsekai4.
     * @param {Aventura} aventura - La aventura en curso.
     * @param {AventuraIsekai} aventuraIsekai - La instancia de AventuraIsekai asociada a la escena.
     */
  constructor (aventura, aventuraIsekai) {
    const titulo = 'En territorio desconocido'
    const desc = 'Nuestros aventureros siguen avanzando y se adentran en un barrio con una apariencia inusual y peligrosa.'
    super(titulo, desc, aventura, aventuraIsekai)
  }

  /**
     * Inicia la escena y muestra la descripción y diálogos.
     */
  iniciarEscena () {
    this.limpiarPantalla()
    this.mostrarTitulo()
    this.mostrarDescripcion()

    // Avanzar a la EscenaIsekai5 al hacer clic en el botón
    document.getElementById('cambiarEscena').onclick = () => {
      const escenaIsekai5 = new EscenaIsekai5(this.aventura, this.aventuraIsekai)
      escenaIsekai5.iniciarEscena()
    }

    this.aventura.bilbo.hablar('Este sitio es muy extraño. Huele muy mal y me recuerda a las guaridas de las ratas.')
    this.aventura.thorin.hablar('Parecen las catacumbas enanas.')
    this.aventura.gandalf.hablar('En cada mundo hay lugares que deben explorarse con precaución. Sigamos avanzando, pero mantengámonos juntos.')
    this.aventura.bilbo.hablar('¡Miren eso! Parece que hay un grupo de personas reuniéndose en ese callejón. ¿Deberíamos preguntarles?')
    this.aventura.thorin.hablar('Estoy de acuerdo. Pero vayamos con cuidado.')
  }
}
