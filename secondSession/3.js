import {generate} from 'random-words';
const words = generate(20).filter(word => word.includes('s'));

console.log(words);

