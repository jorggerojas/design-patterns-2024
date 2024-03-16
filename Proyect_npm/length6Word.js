import { generate } from "random-words";
const words = generate(20);
const filteredWords = words.filter(word => word.length === 6);
console.log(filteredWords);