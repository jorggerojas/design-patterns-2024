import {generate} from 'random-words'

const palabras = generate(20);

palabras.shift();
palabras.pop();

palabras.forEach(palabra => {
    console.log(palabra);
});