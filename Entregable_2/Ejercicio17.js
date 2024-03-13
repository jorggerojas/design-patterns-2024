import {generate} from "random-words";

const random = generate(50)

const filtrado = random.filter((word) => word.length > 5);

const palabras = filtrado.map(function (palabra){
    let objeto = {}
    objeto[palabra] = palabra.length 
    return objeto
})

console.log(palabras)