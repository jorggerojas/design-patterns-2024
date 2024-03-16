import { generate } from "random-words";    

let ejercicio = generate(50);
let copia =  ejercicio.slice()

copia.unshift("Hola");
copia.push("Hola");
console.log(copia)


