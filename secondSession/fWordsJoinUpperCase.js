import { generate } from 'random-words';

const palabrasAleatorias = generate(50);

const palabrasEnMayusculas = palabrasAleatorias.map(palabra => palabra.toUpperCase());
const resultado = palabrasEnMayusculas.join(' ');

console.log(resultado);
