import {generate} from 'random-words';

const palabras = generate(20)
const reemplazada = palabras.map((palabra) => (palabra.length >= 6 ? 'NO' : palabra))

console.log(reemplazada)