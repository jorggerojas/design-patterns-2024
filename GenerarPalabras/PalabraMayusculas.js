import { generate } from "random-words";

let palabras = generate(50);

palabras.forEach(palabra => {
    palabras.push(palabra.toUpperCase());
});

palabras.forEach(palabra => console.log(palabra));
