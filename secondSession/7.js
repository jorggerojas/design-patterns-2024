import { generate } from "random-words";

const words = generate(20).sort();

console.log(words);