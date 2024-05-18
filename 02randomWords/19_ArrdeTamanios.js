import { generate } from 'random-words';

const palabras = generate(50)
const nums = palabras.map(palabra => palabra.length)

console.log(nums)