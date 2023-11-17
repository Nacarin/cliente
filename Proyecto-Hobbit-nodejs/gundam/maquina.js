export class Maquina {
  nombre = null
  #tipoMaquina = null

  constructor (nombre, tipo) {
    this.nombre = nombre
    this.#tipoMaquina = tipo
  }
}
