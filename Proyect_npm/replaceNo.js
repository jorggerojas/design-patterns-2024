import { generate } from "random-words";
const words = generate(20);
const replacedWords = words.map(word => {
    if (word.length === 6) {
        return "NO";
    } else {
        return word;
    }
});
console.log(replacedWords);
