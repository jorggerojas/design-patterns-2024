import { generate } from 'random-words';

const words = generate(50);
const wordObjects = words.map(word => word.length)

console.log(wordObjects)