import { generate } from "random-words";

const palabras = generate(50)
let resultado = []

palabras.forEach((palabra)=>{
    resultado.push(palabra.toUpperCase())
})

console.log(resultado.join(' '))