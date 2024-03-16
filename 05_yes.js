import {generate} from 'random-words'

const palabras = generate(20)

const palabrasFil = palabras.map(palabra=>
    palabra.replace("a","YES"))

palabrasFil.forEach(palabra => {
    console.log(palabra);
});