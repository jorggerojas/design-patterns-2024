import { generate } from 'random-words';

const words = generate(50);
const wordObjects = words.map(word => ({ [word]: word.toUpperCase() }));

console.log(wordObjects);