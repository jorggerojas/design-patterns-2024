import { generate } from "random-words";

const filtroSR = palabra => palabra.includes('s') || palabra.includes('r');

const palabras = generate(20);

const palabrasFiltradas = palabras.filter(filtroSR);

palabrasFiltradas.forEach(palabra => console.log(palabra));
