import {generate} from 'random-words';

const palabras = generate(50)
console.log("Original: ")
console.log(palabras)

palabras.shift()
palabras.pop()
console.log("Eliminando: ")
console.log(palabras)