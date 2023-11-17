import { EscenaGundam } from './escena_gundam.js'
import { EscenaGundam3a } from './escena_gundam3a.js'
import { EscenaGundam3b } from './escena_gundam3b.js'

export class EscenaGundam2 extends EscenaGundam {
  constructor (aventura, aventuraGundam) {
    const titulo = 'Un extraño conflicto'
    const desc = 'Bilbo y Frodo conocen a Amuro Ray, un joven piloto envuelto en una guerra.'
    super(titulo, desc, aventura, aventuraGundam)
  }

  iniciarEscena () {
    this.limpiarPantalla()
    this.mostrarTitulo()
    this.mostrarDescripcion()

    document.getElementById('cambiarEscena').onclick = () => this.decision()

    this.aventuraGundam.amuro.hablar('Mi nombre es Amuro Ray. Estoy luchando en esta guerra que parece no tener fin. No pedí ser parte de esto, pero debido a mis capacidades de pilotaje me vi arrastrado por la guerra.')
    this.aventura.gandalf.hablar('Amuro Ray, en tiempos de conflicto, la vida nos lleva por caminos inesperados, nuestras elecciones influirán en el curso de los acontecimientos. La valentía y la determinación pueden llevar a un cambio en el mundo. Lucha por lo que creas correcto, forjarás tu destino.')
    this.aventuraGundam.amuro.hablar('¿Puedo preguntar de donde venís? Teneís una apariencia un poco pintoresca.')
    this.aventura.bilbo.hablar('¡Oh, mi estimado amigo! Venimos de la Comarca, un lugar apacible y tranquilo. ¿Podrías indicarnos donde estamos? Este sitio no me es conocido')
    this.aventuraGundam.amuro.hablar('Estamos en Asia. ¿La Comarca dices? no me suena, ¿Se encuentra en la tierra?')
    this.aventura.bilbo.hablar('¿Gandalf tu sabes donde está Asia?')
    this.aventura.gandalf.hablar('Creo que hemos sido transportados a otro universo Bilbo')
    this.aventuraGundam.amuro.hablar('No pareceis malas personas. ¿Queréis acompañarme a mi nave?')
  }

  decision () {
    // realiza un confirm con una pregunta para aceptar o cancelar
    const escenaElegida = super.confirmacion('¿Acompañas a Amuro a la White Base?')
    // Si aceptas va a una opción si cancelas a la otra
    if (escenaElegida) {
      const escena3a = new EscenaGundam3a(this.aventura, this.aventuraGundam)
      escena3a.iniciarEscena()
    } else {
      const escena3b = new EscenaGundam3b(this.aventura, this.aventuraGundam)
      escena3b.iniciarEscena()
    }
  }
}
