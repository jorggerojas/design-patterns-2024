import { generate } from "random-words";

const words = generate(50);
const filteredWords = words.filter(word => word.length >= 6);
const result = filteredWords.map(filteredWords => ({ [filteredWords]: filteredWords.length }));
for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
}
