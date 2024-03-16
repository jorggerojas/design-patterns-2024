import {generate} from 'random-words'

const palabras = generate(20)

const palabrasFil = palabras.sort().reverse()

palabrasFil.forEach(palabra => {
    console.log(palabra);
});