import {generate} from 'random-words';

const words = generate(20).filter(palabra => palabra.length >= 6)
                        .map(palabra => ({ [palabra]: palabra.length }));

console.log(words);