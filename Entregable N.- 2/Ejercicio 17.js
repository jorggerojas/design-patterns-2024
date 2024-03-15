import { generate } from 'random-words';

const palabrasAleatorias = generate(50);

const resultado = palabrasAleatorias.filter(palabra => palabra.length >= 6).map(palabra => {
    return { [palabra]: palabra.length };
});

console.log(resultado);