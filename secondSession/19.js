import { generate } from "random-words";

const words = generate(50).map(palabra => palabra.length);

console.log(words);