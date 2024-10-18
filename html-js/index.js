const textoTitulo = document.querySelector('#titulo')
const button = document.querySelector('#button')

// console.log(textoTitulo)

// textoTitulo.innerHTML = 'Cambiado desde js'






let contador = 0
const contarClicks = () => {
  contador += 1
}
button.addEventListener('click', () => {
  contarClicks()
  console.log(contador)
  textoTitulo.innerHTML = `Este es el número de clicks: ${contador}`
} )


// const persona = {
//   nombre: 'angelo',
//   direccion:  {
//     calle: 'setubal',
//     ciudad: 'cdmx'
//   },
//   telefono: '555555555'
// }

// console.log(persona)


function suma (a, b) {
  return a + b
}

const resta = (a, b) => {
  //todo un bloque enorme de codigo
  return a-b
}

const palindromo = (string) => {
  let esPalindromo = true
  for (let i = 0; i < string.length; i++ ) {
    // comparacion
  }
  return esPalindromo
}

let output = suma(1, 1)


console.log(resta(10, 5))
suma(1, 1)
suma(10, 50)
suma(-100, 100)
