import { generate } from "random-words";    
let generado = generate(50);
let copia = generado.slice();

let found = copia.find((element) => element === "army");
console.log(found)
console.log(generado)