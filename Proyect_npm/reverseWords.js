import { generate } from "random-words";

const words = generate(20);

const reversedWords = words.map(word => word.split('').reverse().join(''));

console.log(reversedWords);