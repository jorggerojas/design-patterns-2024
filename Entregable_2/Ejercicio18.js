import {generate} from "random-words";

const random = generate(50)

const palabras = random.map(function (palabra){
    switch (palabra.length) {
        case 1:
        case 2:
        case 3:
            palabra = "ADIOS"
            break;
        case 4:
            palabra = "HOLA"
            break;
        default:
            palabra = "MUNDO"
            break;
    }
    return palabra
})

console.log(palabras)
