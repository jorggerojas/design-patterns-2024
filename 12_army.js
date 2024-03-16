import {generate} from 'random-words'

const palabras = generate(50);

const palabraBuscada = palabras.find(palabra => palabra === "army")

if (palabraBuscada) {
    console.log("Se encontró la palabra 'army'.");
} else {
    console.log("No se encontró la palabra 'army'.");
}