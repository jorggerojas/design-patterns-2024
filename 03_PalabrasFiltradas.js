import {generate} from 'random-words';

const palabras = generate(20)
const filtradas = palabras.filter((palabra)=> palabra.includes('s') || palabra.includes('r'))

console.log(filtradas)