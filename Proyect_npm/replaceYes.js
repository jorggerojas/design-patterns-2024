import { generate } from "random-words";
const words = generate(20);
const modifiedWords = words.map(word => word.replace(/a/g, 'YES'));

console.log(modifiedWords);