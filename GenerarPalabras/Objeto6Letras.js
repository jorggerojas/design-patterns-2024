import { generate } from "random-words";

const palabras = generate(50);

const palabrasConSeisOMasLetras = palabras.filter(palabra => palabra.length >= 6);

const resultado = palabrasConSeisOMasLetras.map(palabra => ({ [palabra]: palabra.length }));

console.log(resultado);
