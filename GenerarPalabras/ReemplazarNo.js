import { generate } from "random-words";

const palabras = generate(20);

const reemplazarPalabrasLargas = palabra => {
    return palabra.length >= 6 ? "NO" : palabra;
};

const palabrasReemplazadas = palabras.map(reemplazarPalabrasLargas);

palabrasReemplazadas.forEach(palabra => console.log(palabra));
