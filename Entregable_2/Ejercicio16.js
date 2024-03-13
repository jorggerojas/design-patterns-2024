import {generate} from "random-words";

const random = generate(50)

const palabras = random.map(function (palabra){
    let objeto = {}
    objeto[palabra] = palabra.length
    return objeto
})

console.log(palabras)
