import { generate } from 'random-words';

const palabras = generate(50)
const army = palabras.find(palabra => palabra == 'army')

if (army) {
    console.log(army)
} else {
    console.log("No se encontró la palabra 'army'.")
}