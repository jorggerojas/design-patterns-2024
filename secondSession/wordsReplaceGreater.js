import { generate } from 'random-words';

const palabrasAleatorias = generate(20);

const palabrasReemplazadas = palabrasAleatorias.map(palabra => {
    if (palabra.length >= 6) {
        return 'NO';
    } else {
        return palabra;
    }
});

console.log(palabrasReemplazadas);
