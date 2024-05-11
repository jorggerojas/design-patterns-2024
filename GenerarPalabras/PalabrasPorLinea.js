import { generate, count } from "random-words";

const palabras = generate(20);

palabras.map(palabra => console.log(palabra));