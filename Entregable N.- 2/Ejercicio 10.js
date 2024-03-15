import { generate } from 'random-words';

const palabrasAleatorias = generate(50);

const palabrasConSaludos = palabrasAleatorias.map(palabra => "¡Hola! " + palabra + " ¡Hola!");

console.log(palabrasConSaludos);
