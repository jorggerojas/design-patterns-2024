import { generate } from "random-words";

const palabras = generate(20);

const palabrasInvertidas = palabras.reverse();

palabrasInvertidas.forEach(palabra => console.log(palabra));
