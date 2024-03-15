import { generate } from "random-words";

const words = generate(20).map(word => word.replace(/a/g, 'yes'));

console.log(words);