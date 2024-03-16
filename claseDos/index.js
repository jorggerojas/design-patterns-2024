import { generate } from "random-words";

const palabras = generate(20);
const filtradas = palabras.map(palabra => {
    if(palabra.length >= 6){
        return 'NO'
    }else{
        return palabra
    }
})

console.log(filtradas)