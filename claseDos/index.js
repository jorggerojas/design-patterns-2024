import { generate } from "random-words";

const palabras = generate(50)
console.log(palabras)

const resultado = palabras.map((palabra) => {
    const objeto = { [palabra] : palabra.length }

    return objeto
})