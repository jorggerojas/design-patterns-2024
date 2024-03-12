import { generate } from 'random-words';

const palabrasAleatorias = generate(20);

const palabrasInvertidas = palabrasAleatorias.reverse();

console.log(palabrasInvertidas);
