import { generate } from "random-words";

let words = generate(50);

words.unshift("Hola");
words.push("hola");

console.log(words);