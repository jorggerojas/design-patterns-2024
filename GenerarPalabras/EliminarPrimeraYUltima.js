import { generate } from "random-words";

let palabras = generate(20);

palabras.shift();

palabras.pop();

palabras.forEach(palabra => console.log(palabra));
