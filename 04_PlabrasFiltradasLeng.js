import {generate} from 'random-words';

const palabras = generate(20)
const filtradas = palabras.filter((palabra)=> palabra.length>=6)

console.log(filtradas)