import { EscenaNexo } from '../escena_nexo.js'
import { Flags } from '../flags.js'
import { EscenaGundam } from './escena_gundam.js'

export class EscenaGundam4aa extends EscenaGundam {
  constructor (aventura, aventuraGundam) {
    const titulo = 'Huida de la White Base'
    const desc = 'Gandalf y Bilbo huyen de la nave al oir que iban a ser llevados al calabozo, pero se les ocurre la idea de llevarse el gundam.'
    super(titulo, desc, aventura, aventuraGundam)
  }

  iniciarEscena () {
    this.limpiarPantalla()
    this.mostrarTitulo()
    this.mostrarDescripcion()

    document.getElementById('cambiarEscena').onclick = () => this.decision()

    this.aventuraGundam.whiteBase.salir(this.aventura.gandalf, this.aventura.bilbo)
    this.aventuraGundam.gundam.pilotar(this.aventura.gandalf)
    this.aventura.gandalf.hablar('Vamonos de aquí Bilbo.')
    this.aventura.bilbo.hablar('¿Cómo hemos conseguido escapar, Gandalf?')
    this.aventura.gandalf.hablar('Buena pregunta.')
    this.aventura.bilbo.hablar('¿Cómo sabes manejar eso, Gandalf?')
    this.aventura.gandalf.hablar('Buena pregunta.')
    this.aventura.bilbo.hablar('...')
    this.aventura.gandalf.hablar('...')

    document.getElementById('cambiarEscena').onclick = () => {
      alert('Y así, Bilbo y Gandalf desaparecieron en el horizonte con su gundam recién robado, para nunca jamás ser vistos otra vez.')
      alert('Espera, esto es un sueño. DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA')
      const escenaNexo = new EscenaNexo(this.aventura)
      escenaNexo.iniciarEscena()
    }
  }
}
