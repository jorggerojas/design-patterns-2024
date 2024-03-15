import { generate } from "random-words";

const words = generate(50).map(word => ({[word]: word.toUpperCase()}));
console.log(words);