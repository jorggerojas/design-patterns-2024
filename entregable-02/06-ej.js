import { generate } from "random-words";

const palabras = generate(20);

console.log('Cambiando palabras con seis letras o más a la palabra "NO": ');
for(let index in palabras){
    if(palabras[index].length >= 6){
        palabras[index] = 'NO';
    }
}

console.log(palabras);