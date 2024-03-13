import {generate} from "random-words";

const random = generate(50)

const palabras = random.map(function (palabra){
    palabra = palabra.length
    return palabra
})

console.log(palabras)
