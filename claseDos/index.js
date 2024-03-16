import { generate } from "random-words";

const palabras = generate(50)
const encontrar = palabras.find((element) => element==='army')

console.log(encontrar)