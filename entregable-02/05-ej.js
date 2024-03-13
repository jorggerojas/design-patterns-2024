import { generate } from "random-words";

const palabras = generate(20);

for(let palabra in palabras){
    palabras[palabra] = palabras[palabra].replace('a', 'YES');
}

console.log('Reemplazando todas las "a" por "YES" en cada elemento: ');
console.log(palabras);