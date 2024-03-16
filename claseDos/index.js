import { generate } from "random-words";

const palabras = generate(20);
const filtradas = palabras.filter(palabra => {
    if(palabra.length >= 6){
        return false
    }else{
        return true
    }
})

console.log(filtradas)