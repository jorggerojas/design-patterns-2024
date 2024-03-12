import { generate } from 'random-words';

const palabrasAleatorias = generate(20);

const palabrasSinExtremos = palabrasAleatorias.slice(1, -1);

console.log(palabrasSinExtremos);
