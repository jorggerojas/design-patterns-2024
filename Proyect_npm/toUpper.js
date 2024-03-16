import { generate } from "random-words";
const words = generate(50);
const result = [];

words.forEach(word => {
    result.push(word);
    result.push(word.toUpperCase());
});

console.log(result);