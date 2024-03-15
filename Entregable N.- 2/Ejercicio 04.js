import { generate } from 'random-words';

const palabrasAleatorias = generate(20);

const palabrasFiltradas = palabrasAleatorias.filter(palabra => palabra.length >= 6);

console.log(palabrasFiltradas);
