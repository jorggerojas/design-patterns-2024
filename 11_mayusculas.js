import {generate} from 'random-words'

const palabras = generate(50);

palabras.forEach(palabra => {
    palabras.push(palabra.toUpperCase())
})

palabras.forEach(palabra => {
    console.log(palabra);
});