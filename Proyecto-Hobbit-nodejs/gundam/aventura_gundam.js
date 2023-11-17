import { Humano } from '../humano.js'
import { EscenaGundam1 } from './escena_gundam1.js'
import { Gundam } from './gundam.js'
import { Nave } from './nave.js'
import { Newtype } from './newtype.js'
import { Saiyan } from './saiyan.js'

export class AventuraGundam {
  esperaCalabozo = 0
  esperaMax = Math.floor(Math.random() * 5) + 1
  goku = new Saiyan('Goku')
  amuro = new Newtype('Amuro Ray')
  bright = new Humano('Bright Noa')
  gundam = new Gundam('RX-78-2 Gundam', this.amuro)
  whiteBase = new Nave('SCV-70 White Base', 'Pegasus', this.bright)

  iniciarSuenho (aventura) {
    const escenaGundam1 = new EscenaGundam1(aventura, this)
    escenaGundam1.iniciarEscena()
  }
}
