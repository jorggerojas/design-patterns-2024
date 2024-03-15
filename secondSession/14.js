import { generate } from "random-words";

const words = generate(50).map(word => word.toUpperCase()).join(' ');

console.log(words);