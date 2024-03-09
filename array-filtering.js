// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function param(param1, param2) {
//   //...
// }

// const filtro = numeros.filter((numero) => {
//   return numero % 2 == 0
// })

// console.log(filtro)
// =>
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const filtered = numbers.filter(evenNumbers)
function evenNumbers(number) {
  return number % 2 === 0
}
console.log(filtered)