import { generate } from 'random-words';

const palabrasAleatorias = generate(20);

const palabrasReemplazadas = palabrasAleatorias.map(palabra => palabra.replace(/a/g, 'YES'));

console.log(palabrasReemplazadas);
