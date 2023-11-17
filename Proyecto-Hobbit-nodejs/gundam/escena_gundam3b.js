import { EscenaGundam } from './escena_gundam.js'
import { EscenaGundam4b } from './escena_gundam4b.js'

export class EscenaGundam3b extends EscenaGundam {
  constructor (aventura, aventuraGundam) {
    const titulo = 'Nuh-uh, no te acompañamos'
    const desc = 'Bilbo y Gandalf no aceptan la invitación de Amuro.'
    super(titulo, desc, aventura, aventuraGundam)
  }

  iniciarEscena () {
    this.limpiarPantalla()
    this.mostrarTitulo()
    this.mostrarDescripcion()

    document.getElementById('cambiarEscena').onclick = () => {
      const escenaGundam4b = new EscenaGundam4b(this.aventura, this.aventuraGundam)
      escenaGundam4b.iniciarEscena()
    }

    this.aventura.gandalf.hablar('Lo siento Amuro, vamos a seguir explorando la zona por nuestra cuenta')
    this.aventuraGundam.amuro.hablar('Que tengáis suerte, yo vuelvo a mi nave')
    this.aventuraGundam.whiteBase.entrar(this.aventuraGundam.amuro)
    this.aventura.bilbo.hablar('¿A donde vamos, Gandalf?')
    this.aventura.gandalf.hablar('Exploremos este desierto')
  }
}
