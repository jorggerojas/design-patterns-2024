import { generate } from "random-words";

const palabras = generate(50);

// palabras.push('army'); solamente para probar el metodo .find

console.log('Buscando palabra "army"...');
const found = palabras.find((element) => element == 'army');

if (found == undefined){
    console.log('Palabra no encontrada.');
} else {
    console.log('Plabra encontrada!: ', found);
}