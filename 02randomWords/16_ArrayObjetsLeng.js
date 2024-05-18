import { generate } from 'random-words';

const palabras = generate(50)
const objetos = palabras.map(palabra => ({[palabra]: palabra.length}))

console.log(objetos)