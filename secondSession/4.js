import {generate} from 'random-words';
const words = generate(20).filter(word => word.length >=6);

console.log(words);