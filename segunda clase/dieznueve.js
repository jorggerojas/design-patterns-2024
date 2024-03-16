import { generate } from "random-words";

let palabras = generate(50);
let resultado = palabras.map(palabra => {
    return palabra.length;
});

console.log(resultado);