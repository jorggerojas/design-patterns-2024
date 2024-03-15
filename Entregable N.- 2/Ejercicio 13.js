import { generate } from 'random-words';

const palabrasAleatorias = generate(50);

const resultado = palabrasAleatorias.join(' ');

console.log(resultado);
