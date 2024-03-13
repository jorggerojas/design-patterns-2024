import {generate} from "random-words";

const random = generate(50)

const palabras = random.map(function (palabra){
    let mayus = palabra.toUpperCase()
    return mayus
})

console.log(palabras.join(' '))