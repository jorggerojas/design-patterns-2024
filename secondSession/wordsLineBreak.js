import { generate } from 'random-words';

const palabrasAleatorias = generate(20);

palabrasAleatorias.forEach(palabra => {
  console.log(palabra);
});

