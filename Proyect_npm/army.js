import { generate } from "random-words";
const words = generate(50);
const filteredWords = words.filter(word => word.includes('army'));
console.log(filteredWords);