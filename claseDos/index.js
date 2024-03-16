import { generate } from "random-words";

const palabras = generate(50)
const resultado = palabras.map((palabra) => {
    const objeto = { [palabra] : palabra.toUpperCase() }

    return objeto
})

console.log(resultado)