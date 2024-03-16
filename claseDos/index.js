import { generate } from "random-words";

const palabras = generate(20);
const filtradas = palabras.filter(palabra => {
    if(palabra.includes('s')||palabra.includes('r')){
        return false
    }else{
        return true
    }
})

console.log(filtradas)