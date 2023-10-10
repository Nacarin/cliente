//David Pozo Berlinches
console.log('Script cargado correctamente.')

let ficheros = ['d1.txt', 'd2.txt', 'd3.txt', 'd4.txt', 'd5.txt', 'd6.txt']

// Función para calcular probabilidades a partir del texto de un archivo
function calcularProbabilidades(datos) {
  const [carasDado1, carasDado2] = datos.split(',').map(Number)
  /*
    *let trozos=entrada.split(',')
    console.log(dados)
    let dado1=Number.parse.Int(dados[0])
    let dado2=+dados[1]  Hace los mismo
  */
  if (isNaN(carasDado1) || isNaN(carasDado2)) {
    console.error('Error: Formato incorrecto en el archivo.')
    return
  }

  if (carasDado1 < 4 || carasDado1 > 20 || carasDado2 < 4 || carasDado2 > 20) {
    console.error('Error: El número de caras debe estar entre 4 y 20.')
    return
  }

  const resultados = {}

  // Calcular todas las combinaciones posibles de lanzamientos de los dos dados
  for (let dado1 = 1; dado1 <= carasDado1; dado1++) {
    for (let dado2 = 1; dado2 <= carasDado2; dado2++) {
      const suma = dado1 + dado2

      // Registrar la suma en el objeto de resultados
      if (resultados[suma]) {
        resultados[suma]++
      } else {
        resultados[suma] = 1
      }
    }
  }
    /*
  let matriz=[]
  for(let i=0;i<dado1;i++){
    matriz[i]=[]
    for(let j=0;j<dadoos2;j++){
      matriz[i][j]=42
    }
    console.log(matriz)
  }
  */

  // Encontrar el número o números más probables
  /*
  let masProbables=[]
  let menosProbables=[]
  let masVeces=0
  let menosVeces=dado1*dado2
  for(let i=2;i<=dado1+dado2;i++){
    let contador=0
    for(let j=0;j<matriz.length;j++){
      for(let k=0;k<matriz[j].length;k++){
        if (matriz[j][k]===i)
          contador++
      }
    }
    if(contador===masVeces)
      masProbables.push(i)   .push(i) mete en el array
    if(contador>masVeces){
      masProbables=[i]
      masVeces=contador
    }
    if(contador===menosVeces)
      menosProbables.push(i)   .push(i) mete en el array
    if(contador>menosVeces){
      menosProbables=[i]
      menosVeces=contador
    }
    console.log(masProbables.join(', ')
    console.log(menosProbables.join(', ')
  }
  */
  const maxProbabilidad = Math.max(...Object.values(resultados))
  const numerosMasProbables = Object.keys(resultados).filter(
    (suma) => resultados[suma] === maxProbabilidad
  )

  // Encontrar el número o números menos probables
  const minProbabilidad = Math.min(...Object.values(resultados))
  const numerosMenosProbables = Object.keys(resultados).filter(
    (suma) => resultados[suma] === minProbabilidad
  )

  console.log("Números más probables:", numerosMasProbables)
  console.log("Números menos probables:", numerosMenosProbables)
}

// Carga de ficheros de datos de entrada
ficheros.forEach(fichero => {
  fetch(fichero) // Carga el fichero
    .then(respuesta => {
      if (!respuesta.ok) {
        console.error('Error al cargar el archivo ' + fichero + ':', respuesta.status)
        return ''
      }
      return respuesta.text()
    }) // Saca el texto
    .then(datos => {
      /*
      function funcion1(entrada)
        if(!entrada){
          console.log('El fichero esta vacio')
          return
      }
      */
      if (datos.trim() === '') {
        console.error('Error: El archivo ' + fichero + ' está vacío.')
        return
      }
      calcularProbabilidades(datos) // pasa el texto a la función calcularProbabilidades
    })
})