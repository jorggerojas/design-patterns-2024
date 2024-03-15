import { generate } from "random-words";

const words = generate(20).slice(1, -1);

console.log(words);