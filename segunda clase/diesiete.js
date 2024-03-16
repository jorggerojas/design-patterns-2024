import { generate } from "random-words";

let palabras = generate(50);

let resultado = palabras.filter(palabra => palabra.length > 5).map(palabra => {
    let obj = {};
    obj[palabra] = palabra.length; 
    return obj; 
});

console.log(resultado);
