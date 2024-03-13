import { generate } from "random-words";

console.log('Generando un array de objetos a partir de un set de datos:\n');
const palabras = generate(50);

let palabrasObj = [];

for(let index in palabras){
    let obj = {}; //Crea una template de objeto 
    obj[palabras[index]] = palabras[index].length; /*Asigna el nombre de la propiedad con el array de las keys = palabras  y su valor será la longitud de las mismas*/
    palabrasObj.push(obj); //Introduce el objeto al array vacio
}

console.log(palabrasObj);