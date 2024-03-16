import {generate} from 'random-words'

const palabras = generate(50);

const resultado = palabras.map(palabra => palabra.length)
console.log(resultado)