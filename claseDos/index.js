import { generate } from "random-words";

const palabras = generate(50)
const filtradas = palabras.filter((elemento)=>elemento.length>=6)
const resultado = filtradas.map((palabra) => {
    const objeto = { [palabra] : palabra.length }

    return objeto
})

console.log(resultado)