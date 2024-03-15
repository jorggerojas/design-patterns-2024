import { generate } from "random-words";

const palabras = generate(20);

const reemplazarLetraA = palabra => {
    return palabra.split('').map(letra => letra === 'a' ? 'YES' : letra).join('');
};

const palabrasReemplazadas = palabras.map(reemplazarLetraA);

palabrasReemplazadas.forEach(palabra => console.log(palabra));
