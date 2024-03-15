import { generate } from "random-words";

const words = generate(20).map(word => word.length >= 6 ? 'NO' : word);

console.log(words);