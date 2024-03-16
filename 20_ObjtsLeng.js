import { generate } from 'random-words';

const words = generate(50)
const wordLengths = words.reduce((acc, word) => {
    acc[word] = word.length
    return acc
   }, {});
   
console.log(wordLengths);