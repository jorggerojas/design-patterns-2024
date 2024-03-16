import {generate} from 'random-words'

const palabras = generate(50);

const resultado = palabras.filter(palabra => palabra.length >= 6)
.map(palabra => ({ [palabra]: palabra.length }));
console.log(resultado)