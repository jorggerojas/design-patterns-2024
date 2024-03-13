import { generate } from "random-words";

const palabras = generate(20);

console.log('Imprimiendo palabras que tengan 6 o más letras: ');
const filtrado = palabras.filter((palabra) => palabra.length >= 6);

console.log(filtrado);