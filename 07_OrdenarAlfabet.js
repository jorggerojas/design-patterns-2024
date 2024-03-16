import {generate} from 'random-words';

const palabras = generate(20)
const ordenadas = palabras.sort()

console.log(ordenadas)