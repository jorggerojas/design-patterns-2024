import { generate } from "random-words";

const palabras = generate(50);

const resultado = palabras.reduce((obj, palabra) => {
    obj[palabra] = palabra.length;
    return obj;
}, {});

console.log(resultado);
