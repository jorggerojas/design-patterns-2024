import { generate } from "random-words";

let palabras = generate(50);
console.log('Palabras se reemplazarán por otras dependiendo de su longitud:\n');

let palabras1 = palabras.map((element) =>{
    if(element.length == 4){
        return element.replace(element, 'HOLA');
    } else if (element.length > 4) {
        return element.replace(element, 'MUNDO')
    } else {
        return element.replace(element, 'ADIOS');
    }
})

console.log(palabras1);