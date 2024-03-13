import { generate } from "random-words";

let palabras = generate(20);

console.log('Este es el orden original del array: ');
console.log(palabras);

console.log('\nEste es el orden invertido del array: ');
palabras = palabras.reverse();
console.log(palabras);