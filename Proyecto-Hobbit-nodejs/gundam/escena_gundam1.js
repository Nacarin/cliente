import { Flags } from '../flags.js'
import { EscenaGundam } from './escena_gundam.js'
import { EscenaGundam2 } from './escena_gundam2.js'

export class EscenaGundam1 extends EscenaGundam {
  constructor (aventura, aventuraGundam) {
    const titulo = 'Un mundo desconocido'
    const desc = 'Bilbo y Frodo aparecen en una llanura desolada, en el horizonte se puede observar la silueta de un robot gigante.'
    super(titulo, desc, aventura, aventuraGundam)
  }

  iniciarEscena () {
    this.limpiarPantalla()
    this.mostrarTitulo()
    this.mostrarDescripcion()

    // Para avanzar a una escena concreta al pulsar el botón sin opciones
    document.getElementById('cambiarEscena').onclick = () => {
      const escenaGundam2 = new EscenaGundam2(this.aventura, this.aventuraGundam)
      escenaGundam2.iniciarEscena()
    }

    this.aventura.gandalf.hablar('¿Dónde estamos?')
    this.aventura.bilbo.hablar('¡No tengo ni idea, Gandalf! Pero eso parece una máquina gigante.')
    this.aventuraGundam.amuro.flash()
    this.aventuraGundam.gundam.bajarse()
    this.aventuraGundam.amuro.hablar('¡Espera un segundo! ¿Quiénes sois vosotros? ¿De dónde habéis salido?')
    this.aventura.gandalf.hablar('¡No somos enemigos, joven guerrero! Soy Gandalf el Gris, y este es mi amigo Bilbo Bolsón.')
    this.aventura.bilbo.hablar('¡Un placer conocerte!')
  }
}
