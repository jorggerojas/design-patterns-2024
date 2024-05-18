import {generate} from 'random-words';

const palabras = generate(20)
console.log("Original: ")
console.log(palabras)

palabras.reverse()
console.log("Invertidas: ")
console.log(palabras)