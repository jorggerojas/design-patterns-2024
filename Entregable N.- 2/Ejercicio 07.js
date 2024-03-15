import { generate } from 'random-words';

const palabrasAleatorias = generate(20);

const palabrasOrdenadas = palabrasAleatorias.sort();

console.log(palabrasOrdenadas);
