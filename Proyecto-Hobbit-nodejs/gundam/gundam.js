import { MobileSuit } from './mobile_suit.js'
import { gundam } from './tipos_maquinas.js'

export class Gundam extends MobileSuit {
  constructor (nombre, piloto = null) {
    super(nombre, gundam, piloto)
  }
}
