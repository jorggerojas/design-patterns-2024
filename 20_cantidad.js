import {generate} from 'random-words'


const palabras = generate(50)

const resultado = palabras.reduce((objeto, palabra) => {
    objeto[palabra] = palabra.length;
    return objeto;
}, {});

console.log(resultado);