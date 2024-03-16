import { generate } from 'random-words';

const words = generate(50);
const armyWord = words.find(word => word == 'Army');

console.log(armyWord);