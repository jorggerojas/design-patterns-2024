import { generate } from "random-words";

const palabras = generate(20);

const palabrasOrdenadas = palabras.sort();

palabrasOrdenadas.forEach(palabra => console.log(palabra));
