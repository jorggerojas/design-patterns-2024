import { generate } from "random-words";

const palabras = generate(20);
const filtradas = palabras.slice(1,-1)

console.log(palabras)
console.log(filtradas)