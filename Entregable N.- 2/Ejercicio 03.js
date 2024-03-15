import { generate } from 'random-words';

const palabrasAleatorias = generate(20);

const palabrasFiltradas = palabrasAleatorias.filter(palabra => palabra.includes('s') || palabra.includes('r'));

console.log(palabrasFiltradas);
