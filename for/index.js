// Ciclos

let arreglo = [ 5, 90, 100]

// console.log(arreglo[2])
let palabra = 'anita lava la tina'.replace(/ /g, "")
let palindromo = true


for (let i = 0; i < palabra.length; i++) {
  let derecho = palabra[i]
  let reves = palabra[palabra.length - i -1]

  console.log(derecho, reves)
  if (reves != derecho) {
    palindromo = false
  } 
}

if (palindromo === true) {
  console.log('es palindromo')
} else {
  console.log('no es palindromo')
}


// let number = 10
// do {
//   number += 1
//   console.log(number)
// } while (number < 10)


// while (number < 10) {
//   number += 1
//   console.log(number, 'from while')
// }

// un ciclo que imprima solo los numeros pares del uno al 100

// haz un ciclo que resuelva si una frase es un palindromo

// ejemplo: oso, anita lava la tina

// for (i = 1; i <= 100; i++) {

//   if (i % 2 === 0) {
//     console.log(i)
//   }

// }

for (i = 2; i <= 100; i += 2) {
  console.log(i); 
}