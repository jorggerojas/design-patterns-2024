import {generate} from 'random-words';

const palabras = generate(50)
console.log("Original: ")
console.log(palabras)

const aniadido = ['HOLA'].concat(palabras).concat(['HOLA'])
console.log("Añadiendo: ")
console.log(aniadido)