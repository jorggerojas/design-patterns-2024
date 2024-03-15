import { generate } from "random-words";

let palabras = generate(50);

palabras.unshift("¡Hola!");
palabras.push("¡Hola!");

palabras.forEach(palabra => console.log(palabra));
