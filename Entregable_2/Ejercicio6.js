import {generate} from "random-words";

const random = generate(20)

const palabras = random.map(function (palabra){
    if(palabra.length > 5) {
        return 'NO'
    } else {
        return palabra
    }
})

console.log(palabras)