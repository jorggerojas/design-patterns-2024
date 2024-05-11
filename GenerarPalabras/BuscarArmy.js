import { generate } from "random-words";

const palabras = generate(500);

const palabraArmy = palabras.find(palabra => palabra === "army");

if (palabraArmy) {
    console.log("La primera palabra que coincide con 'army' es:", palabraArmy);
} else {
    console.log("No se encontró ninguna palabra que coincida con 'army'");
}
