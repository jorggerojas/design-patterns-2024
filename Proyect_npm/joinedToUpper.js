import { generate } from "random-words";
const words = generate(50);
const result = [];

words.forEach(word => {
    result.push(word.toUpperCase());
});

const joinedString = result.join(" ");

console.log(joinedString);