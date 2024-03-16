import { generate } from "random-words";

const palabras = generate(50)
let resultado = []
palabras.forEach((palabra) => {
    resultado.push(palabra.length)
})
console.log(palabras)
console.log(resultado)