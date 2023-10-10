/*
Diferenciar entre clase y objeto.
Clases en mayusculas y objetos en minusculas
Atributo:Una variable dentro de un objeto
*/
console.log('Script cargado correctamente.')

import {Personaje} from './personaje.js'
import {Enano} from './enano.js'
import {Objeto} from './objeto.js'
import {claseMago,claseGuerrero,claseSaqueador,claseClerigo,razaHumano,razaElfo,razaEnano,razaHobbit} from './clase_raza.js'

let bilbo=new Personaje('Bilbo Bolso',razaHobbit)


let gandalf=new Personaje('Gandalf el Gris',razaHumano,claseMago)

let aladar=new Personaje('Aladar el Azul',razaHumano,claseMago)

console.log(bilbo,gandalf)

/*Este punto es el del this */
gandalf.hablar('Buenos dias mi viejo amigo');
bilbo.hablar('¡Gandalf! Me alegro de verte');


let lampara=new Objeto('Lampara de mesa azul')
let reloj=new Objeto('Reloj del abuelo')

let thorin=new Enano('Thorin Escudo de Roble',claseGuerrero)
let kili=new Personaje('Kili',razaEnano)
let fili=new Personaje('Fili',razaEnano)
let dwalin=new Enano('Dwalin',razaEnano)

/* console.log(thorin,kili,fili,dwalin) */

gandalf.hablar('¡Ya estan aqui!Bienvenidos a la casa de Bilbo')


document.getElementById('divHistoria').innerHTML += 'De pronto en la casa aparecieron '

// Crear un array de nombres de enanos
let nombresEnanos = [thorin.nombre, kili.nombre, fili.nombre, dwalin.nombre]

// Usar join() para unir los nombres con comas y "y" antes del último
let nombresEnanosFormateados = nombresEnanos.slice(0, -1).join(', ') + ' y ' + nombresEnanos.slice(-1)

document.getElementById('divHistoria').innerHTML += nombresEnanosFormateados




/*Queremos que un personaje coja un objeto y lo ponga en su inventario */
kili.coger(lampara)
bilbo.hablar('¡Deja eso en su sitio!')
kili.hablar('Cogelo Fili')
kili.pasar(lampara,fili)
fili.hablar('Ya la tengo')
fili.coger(reloj)

dwalin.hablar('Viva nuestro rey '+ Enano.rey)
kili.hablar(Enano.alabarAlRey())