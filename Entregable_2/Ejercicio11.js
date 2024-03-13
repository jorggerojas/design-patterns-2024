import {generate} from "random-words";

const random = generate(50)

const palabras = random.map(function (palabra){
    let arreglo = []
    arreglo.push(palabra)
    let mayus = palabra.toUpperCase()
    arreglo.push(mayus)
    return arreglo
})

console.log(palabras)
