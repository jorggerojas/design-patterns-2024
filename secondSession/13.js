import { generate } from "random-words";

const words = generate(50).join(' ');

console.log(words);