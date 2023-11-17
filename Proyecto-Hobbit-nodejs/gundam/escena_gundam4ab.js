import { EscenaGundam } from './escena_gundam.js'
import { EscenaGundam4aa } from './escena_gundam4aa.js'
import { EscenaGundamCalabozo1 } from './escena_gundamrellenoCalabozo1.js'

export class EscenaGundam4ab extends EscenaGundam {
  constructor (aventura, aventuraGundam) {
    const titulo = 'Encerrados en el calabozo'
    const desc = 'Gandalf y Bilbo son acompañados al calabozo de la White Base.'
    super(titulo, desc, aventura, aventuraGundam)
  }

  iniciarEscena () {
    this.limpiarPantalla()
    this.mostrarTitulo()
    this.mostrarDescripcion()

    document.getElementById('cambiarEscena').onclick = () => this.decision()

    this.aventuraGundam.amuro.hablar('Lo siento mucho chicos, no debí haberos traído aquí.')
    this.aventura.gandalf.hablar('Entiendo el punto de vista de tu capitán estando en guerra. No nos conoceis de nada.')
    this.aventura.bilbo.hablar('Os demostraremos que somos inocentes y que no tenemos nada que ver con Zeon.')
    this.aventuraGundam.amuro.hablar('Intentaré convencer a Bright de que os libere.')
  }

  decision () {
    // realiza un prompt con una indicación de la respuesta esperada
    const escenaElegida = super.hacerPregunta('Deseas intentar huir robándo el gundam en el proceso (huir) o esperar en el calabozo (esperar)')
    // Si coincide la respuesta con una de las opciones cambiamos de escena, si no alertamos de respuesta inválida
    switch (escenaElegida) {
      case 'huir':
        const escenaGundam4aa = new EscenaGundam4aa(this.aventura, this.aventuraGundam)
        escenaGundam4aa.iniciarEscena()
        break
      case 'esperar':
        const escenaGundamCalabozo1 = new EscenaGundamCalabozo1(this.aventura, this.aventuraGundam)
        escenaGundamCalabozo1.iniciarEscena()
        break

      default:
        alert('Respuesta inválida')
    }
  }
}
