import { generate } from 'random-words';

const words = generate(50);

const wordsJoin = words.join(' ').toUpperCase();

console.log(wordsJoin);