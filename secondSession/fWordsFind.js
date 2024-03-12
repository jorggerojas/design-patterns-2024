import { generate } from 'random-words';

const palabrasAleatorias = generate(50);

const palabraBuscada = palabrasAleatorias.find(palabra => palabra === "army");

console.log(palabraBuscada);
