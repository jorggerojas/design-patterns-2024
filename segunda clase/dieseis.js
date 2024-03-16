import { generate } from "random-words";

let palabras = generate(50);

let resultado = palabras.map(palabra => {
    let obj = {}; 
    obj[palabra] = palabra.length; 
    return obj; 
});

console.log(resultado);
