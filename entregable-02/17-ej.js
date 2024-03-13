import { generate } from "random-words";

let palabras = generate(50);

console.log('Convirtiendo en objetos las palabras con igual o más de seis letras:\n');

palabras = palabras.filter((element) => element.length >= 6);

let palabrasObj = [];

for(let index in palabras){
    let obj = {};
    obj[palabras[index]] = palabras[index].length;

    palabrasObj.push(obj);
}

console.log(palabrasObj);