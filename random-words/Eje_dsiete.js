import { generate } from 'random-words';

const words = generate(50);
const wordFilter = words.filter(word => word.length >= 6);
const wordObjects = wordFilter.map(word => ({[word] : word.length}));

console.log(wordObjects);