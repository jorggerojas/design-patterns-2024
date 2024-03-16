import { generate } from "random-words";

let palabras = generate(50);
let resultado = palabras.map(palabra => {
    if (palabra.length === 4) {
        return "HOLA";
    } else if (palabra.length > 4) {
        return "MUNDO";
    } else {
        return "ADIOS";
    }
});

console.log(resultado);
