import { generate } from 'random-words';

const palabrasAleatorias = generate(50);

const resultado = palabrasAleatorias.reduce((objeto, palabra) => {
    objeto[palabra] = palabra.length;
    return objeto;
}, {});

console.log(resultado);
