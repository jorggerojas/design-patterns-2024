import { generate } from "random-words";

let words = generate(50);

const duplicate = [ ];
words.forEach(word => {
    duplicate.push(word);
    duplicate.push(word.toUpperCase());
})

console.log(duplicate);