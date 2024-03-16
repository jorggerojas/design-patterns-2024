import { generate } from 'random-words';

const words = generate(20);

words.forEach((word) => {
  console.log(word);
});