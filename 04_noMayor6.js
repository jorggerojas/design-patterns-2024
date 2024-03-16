import {generate} from 'random-words'

const palabras = generate(20);

const palabrasFil = palabras.map(palabra =>
    palabra.length < 6)

palabrasFil.forEach(palabra => {
    console.log(palabra);
});