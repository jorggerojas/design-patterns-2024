import {generate} from "random-words";

const random = generate(50)

const palabras = random.map(function (palabra){
    let objeto = {}
    let mayus = palabra.toUpperCase()
    objeto[palabra] = mayus    
    return objeto
})

console.log(palabras)
