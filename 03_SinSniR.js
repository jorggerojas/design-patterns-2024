import {generate} from 'random-words'

const palabras = generate(20)

const palabrasFil = palabras.filter(palabra =>
    palabra.includes('s')||palabra.includes('r'))

palabrasFil.forEach(palabra => {
    console.log(palabra);
});