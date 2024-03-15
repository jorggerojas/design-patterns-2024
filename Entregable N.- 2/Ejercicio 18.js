import { generate } from 'random-words';

const palabrasAleatorias = generate(50);

const resultado = palabrasAleatorias.map(palabra => {
    if (palabra.length === 4) {
        return "HOLA";
    } else if (palabra.length > 4) {
        return "MUNDO";
    } else {
        return "ADIOS";
    }
});

console.log(resultado);
