import { generate } from "random-words";

let palabras = generate(20);
console.log('Array antes de eliminar primer y ultimo elemento: ');
console.log(palabras);

palabras.shift();
palabras.pop();

console.log('\nArray despues de eliminar su primer y ultimo elemento: ');
console.log(palabras);