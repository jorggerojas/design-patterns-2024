import { generate } from "random-words";

const words = generate(20);

const modifiedWords = words.map(word => word.slice(1, -1));

console.log(modifiedWords);