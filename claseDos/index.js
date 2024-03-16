import { generate } from "random-words";

const palabras = generate(50);
const hola = ['¡Hola!']

const resultado = hola.concat(palabras)
const resultadofinal = resultado.concat(hola)


console.log(resultadofinal)