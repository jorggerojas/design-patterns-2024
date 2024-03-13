import { generate } from "random-words";

const palabras = generate(20);

console.log("Imprimiendo 20 palabras en líneas separadas...");

for(let prop in palabras){
    console.log(`${(parseInt(prop) + 1)}: ${palabras[prop]}`);
}