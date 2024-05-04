import { generate } from 'random-words';

const palabrasAleatorias = generate(50);

const resultado = palabrasAleatorias.map(palabra => {
    return { [palabra]: palabra.length };
});

console.log(resultado);