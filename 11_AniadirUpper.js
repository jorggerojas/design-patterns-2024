import {generate} from 'random-words';

const palabras = generate(50)
const mayusculas = []

palabras.forEach(palabra => {
    mayusculas.push(palabra)
    mayusculas.push(palabra.toUpperCase())
});

console.log(mayusculas)