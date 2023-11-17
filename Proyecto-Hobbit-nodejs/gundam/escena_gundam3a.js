import { EscenaGundam } from './escena_gundam.js'
import { EscenaGundam4aa } from './escena_gundam4aa.js'
import { EscenaGundam4ab } from './escena_gundam4ab.js'

export class EscenaGundam3a extends EscenaGundam {
  constructor (aventura, aventuraGundam) {
    const titulo = 'Bienvenidos a la White Base'
    const desc = 'Tras aceptar la invitación a la nave de Amuro, se suben a ella.'
    super(titulo, desc, aventura, aventuraGundam)
  }

  iniciarEscena () {
    this.limpiarPantalla()
    this.mostrarTitulo()
    this.mostrarDescripcion()

    document.getElementById('cambiarEscena').onclick = () => this.decision()

    this.aventuraGundam.whiteBase.entrar(this.aventuraGundam.amuro, this.aventura.bilbo, this.aventura.gandalf)
    this.aventuraGundam.amuro.hablar('Esta es la White Base, en ella encontraréis un refugio seguro y compañeros dispuestos a luchar por un futuro mejor.')
    this.aventuraGundam.amuro.hablar('Oh, aquí está el capitán Bright')
    this.aventuraGundam.bright.hablar('¿Quienes son estas personas, Amuro?')
    this.aventuraGundam.amuro.hablar('Los he encontrado en medio del desierto, dicen ser de un sitio llamado la Comarca, creo que las temperaturas del desierto les ha podido afectar. Sin embargo no parecen ser malas personas.')
    this.aventuraGundam.bright.hablar('¡¿Cómo se te ocurre dejarlos entrar?!, ¡podrían ser espías de Zeon!')
    this.aventuraGundam.bright.pegarBofetada(this.aventuraGundam.amuro)
    this.aventuraGundam.amuro.hablar('¡Ouch! ¿Por qué me pegas?')
    this.aventura.gandalf.hablar('Por favor señor, no le pegue al chico, él no tiene culpa de nada')
    this.aventura.bilbo.hablar('No conocemos a ningún Zeon')
    this.aventuraGundam.bright.hablar('Amuro, lleva ahora mismo a estas personas al calabozo')
  }

  decision () {
    // realiza un prompt con una indicación de la respuesta esperada
    const escenaElegida = super.hacerPregunta('Deseas huir robándo el gundam en el proceso (huir) o aceptar el destino e ir al calabozo (destino)')
    // Si coincide la respuesta con una de las opciones cambiamos de escena, si no alertamos de respuesta inválida
    switch (escenaElegida) {
      case 'huir':
        const escenaGundam4aa = new EscenaGundam4aa(this.aventura, this.aventuraGundam)
        escenaGundam4aa.iniciarEscena()
        break
      case 'destino':
        const escenaGundam4ab = new EscenaGundam4ab(this.aventura, this.aventuraGundam)
        escenaGundam4ab.iniciarEscena()
        break

      default:
        alert('Respuesta inválida')
    }
  }
}
