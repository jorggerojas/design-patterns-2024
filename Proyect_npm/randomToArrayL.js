import { generate } from "random-words";

const words = generate({ exactly: 50 });
const wordLengths = words.map(word => word.length);
console.log(wordLengths);
