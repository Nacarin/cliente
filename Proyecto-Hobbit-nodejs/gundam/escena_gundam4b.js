import { EscenaNexo } from '../escena_nexo.js'
import { Flags } from '../flags.js'
import { EscenaGundam } from './escena_gundam.js'

export class EscenaGundam4b extends EscenaGundam {
  constructor (aventura, aventuraGundam) {
    const titulo = '¿Quién es ese?'
    const desc = 'Bilbo y Gandalf encuentran a una persona extraña mientras viajan.'
    super(titulo, desc, aventura, aventuraGundam)
  }

  iniciarEscena () {
    this.limpiarPantalla()
    this.mostrarTitulo()
    this.mostrarDescripcion()

    document.getElementById('cambiarEscena').onclick = () => {
      alert('RIP')
      alert('Un momento, nadie ha muerto, esto es un sueño. DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA DESPIERTA')
      Flags.activarFlagGundam()
      const escenaNexo = new EscenaNexo(this.aventura)
      escenaNexo.iniciarEscena()
    }

    this.aventura.bilbo.hablar('Mira Gandalf, hay un hombre ahí.')
    this.aventura.gandalf.hablar('Vamos a saludarle.')
    this.aventura.gandalf.hablar('Buenas, señor somos Gandalf y Bilbo, venimos de la Comarca.')
    this.aventuraGundam.goku.hablar('¿Señor? ¿Me habláis a mí? ¡Luchemos!')
    this.aventura.gandalf.hablar('Lo sentimos, no queríamos molestarle, no queremos luch...')
    this.aventuraGundam.goku.genkiDama()
  }
}
