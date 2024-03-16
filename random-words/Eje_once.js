import { generate } from 'random-words';

const words = generate(50);
const modifiedWords = [];

words.forEach(word => {
  modifiedWords.push(word);
  modifiedWords.push(word.toUpperCase());
});

console.log(modifiedWords);