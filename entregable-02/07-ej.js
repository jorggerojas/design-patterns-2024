import { generate } from "random-words";

let palabras = generate(20).sort();
console.log("Ordenando alfabeticamente un array: ");

console.log(palabras);