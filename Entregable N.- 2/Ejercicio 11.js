import { generate } from 'random-words';

const palabrasAleatorias = generate(50);
const palabrasConMayusculas = [];

palabrasAleatorias.forEach(palabra => {
    palabrasConMayusculas.push(palabra);
    palabrasConMayusculas.push(palabra.toUpperCase());
});

console.log(palabrasConMayusculas);
