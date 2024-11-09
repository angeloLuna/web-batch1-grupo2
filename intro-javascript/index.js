// let edad = prompt('dame tu edad')


// console.log(edad)

// let nombre = 'angelo'
let apellido = 'luna'

let numero = 16

// console.log(nombre)

// operadores basicos
// +
// -
// *
// /
// %

// Operadores comparación
// >
// <

// 5 == '5'
// 5 === '5'
// ==
// ===

// >=
// <=
// !=
// Operadores Lógicos


// let boolean = false

// let array = [2, 0, 7, 2, "hey"]

// let obj = {
//   direccion: {
//     calle: 'Setubal',
//     numero: 12 + 1,
//   },
// }

// let numero1 = prompt('ingrsa un numero')
// let numero2 = prompt('ingresa otro')

// console.log(Number(numero1) + Number(numero2) )

// alert(Number(numero1) + Number(numero2))




"Hola mi nombre es Angelo, mi serie favorita es Arcane y me gustan los taquitos"

// let nombre = prompt("Ingresa tu nombre")
// let serie = prompt("Ingresa tu serie fav")
// let comida = prompt("Ingresa tu comida fav")

// console.log('Hola mi nombre es ' + nombre + ' mi serie favorita es ' + serie + ' me gustan ' + comida)

// `Hola mi nombre es ${nombre}, mi serie favorita es ${serie} y me gustan ${comida}`

// console.log(`Hola mi nombre es ${nombre}, mi serie favorita es ${serie} y me gustan ${comida}`)

// a > b > c > a

let edad = 24
let cedula = true

if (edad >= 18 && cedula === true) {
  // console.log('puedes votar')
  // if (cedula === true) {
  //   console.log("Puedes votar")
  // } else {
  //   console.log("necesitas cedula para votar")
  // }
} else {
  // console.log('No puedes votar')
}

let personas = 2 

// if (personas === 1) {
  //   console.log("mostrar paquetes individuales")
  // } else if (personas >= 2 && personas <= 3) {
    //   console.log('mostrar paquete amiguis')
    // } else {
      //   console.log('Mostrar paquete familiar')
      // }
      
      // if (personas === 1) {
        //   console.log("mostrar paquetes individuales")
        // }
        // if (personas >= 2 && personas <= 3 ) {
//   console.log('mostrar paquete amiguis')
// } else {
//   console.log('Mostrar paquete familiar')
// }

console.log(personas)
switch (personas) {
  case 1:
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
    console.log('Mostrar paquetes personales')
    break;
  case 2 | 3:
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
      console.log('mostrar paquete amiguis')
    break;
  default:
    //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
      console.log('Mostrar paquete familiar')
    break;
}

[
  {
    
  }
]