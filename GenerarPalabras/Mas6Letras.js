import { generate } from "random-words";

const filtroLongitud = palabra => palabra.length >= 6;

const palabras = generate(20);

const palabrasFiltradas = palabras.filter(filtroLongitud);

palabrasFiltradas.forEach(palabra => console.log(palabra));
