import { Maquina } from './maquina.js'
import { nave as tipoMaquina } from './tipos_maquinas.js'
export class Nave extends Maquina {
  #tipoNave = null
  #tripulacion = new Set()
  constructor (nombre, tipoNave = null, personaje = null) {
    super(nombre, tipoMaquina)
    this.#tipoNave = tipoNave
    this.#tripulacion.add(personaje)
  }

  entrar () {
    for (let i = 0; i < arguments.length; i++) {
      this.#tripulacion.add(arguments[i])
    }
    this.#textoEntrada(arguments)
  }

  #textoEntrada (personaje) {
    const elementos = Array.from(personaje) // Convertir el conjunto a un array
    const length = elementos.length
    let textoEntrada

    if (length === 0) {
      return
    } else if (length === 1) {
      textoEntrada = '<br><i>' + elementos[0].nombre + ' ha entrado a la ' + this.nombre + '</i>'
    } else {
      const ultimoElemento = elementos.pop()
      textoEntrada = '<br><i>' + elementos.map(objeto => objeto.nombre).join(', ') + ' y ' + ultimoElemento.nombre + ' han entrado a la ' + this.nombre + '</i>'
    }
    document.getElementById('divHistoria').innerHTML += textoEntrada
  }

  salir () {
    for (let i = 0; i < arguments.length; i++) {
      this.#tripulacion.delete(arguments[i])
    }
    this.#textoSalida(arguments)
  }

  #textoSalida (personaje) {
    const elementos = Array.from(personaje) // Convertir el conjunto a un array
    const length = elementos.length
    let textoEntrada

    if (length === 0) {
      return
    } else if (length === 1) {
      textoEntrada = '<br><i>' + elementos[0].nombre + ' ha salido de la ' + this.nombre + '</i>'
    } else {
      const ultimoElemento = elementos.pop()
      textoEntrada = '<br><i>' + elementos.map(objeto => objeto.nombre).join(', ') + ' y ' + ultimoElemento.nombre + ' han salido de la ' + this.nombre + '</i>'
    }
    document.getElementById('divHistoria').innerHTML += textoEntrada
  }
}
