import { EscenaNexo } from '../escena_nexo.js'
import { Flags } from '../flags.js'
import { EscenaGundam } from './escena_gundam.js'

export class EscenaGundamCalabozo1 extends EscenaGundam {
  constructor (aventura, aventuraGundam) {
    const titulo = 'Encerrados en el calabozo...'
    const desc = 'Gandalf y Bilbo esperan en el calabozo...'
    super(titulo, desc, aventura, aventuraGundam)
  }

  iniciarEscena () {
    this.limpiarPantalla()
    this.mostrarTitulo()
    this.mostrarDescripcion()

    document.getElementById('cambiarEscena').onclick = () => this.decision()

    this.aventura.bilbo.hablar('¿Cuánto tiempo estaremos aquí, Gandalf?')
    this.aventura.gandalf.hablar('No lo se, presiento que entre 1 y 5')
    this.aventura.bilbo.hablar('¿1 y 5 qué?')
    this.aventura.gandalf.hablar('No lo se')
    for (let i = 0; i < this.aventuraGundam.esperaCalabozo; i++) {
      this.aventura.bilbo.hablar('...')
      this.aventura.gandalf.hablar('...')
    }
  }

  decision () {
    // realiza un prompt con una indicación de la respuesta esperada
    const escenaElegida = super.hacerPregunta('Deseas intentar huir robándo el gundam en el proceso (huir) o esperar en el calabozo (esperar)')
    // Si coincide la respuesta con una de las opciones cambiamos de escena, si no alertamos de respuesta inválida
    switch (escenaElegida) {
      case 'huir':
        const EscenaGundam4aa = new Escena4aa(this.aventura)
        EscenaGundam4aa.iniciarEscena()
        break
      case 'esperar':

        if (!(this.aventuraGundam.esperaCalabozo++ >= this.aventuraGundam.esperaMax)) {
          const escenaGundamCalabozo1 = new EscenaGundamCalabozo1(this.aventura, this.aventuraGundam)
          escenaGundamCalabozo1.iniciarEscena()
        } else {
          alert('Gandalf y Bilbo se murieron del aburrimiento RIP 😢')
          alert('Nada es real, esto es un sueño. DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA')
          const escenaNexo = new EscenaNexo(this.aventura)
          escenaNexo.iniciarEscena()
        }
        break

      default:
        alert('Respuesta inválida')
    }
  }
}
