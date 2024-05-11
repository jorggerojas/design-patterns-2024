import { generate } from "random-words";

const palabras = generate(50);

const resultado = palabras.map(palabra => {
    if (palabra.length === 4) {
        return "HOLA";
    } else if (palabra.length > 4) {
        return "MUNDO";
    } else {
        return "ADIOS";
    }
});

console.log(resultado);
