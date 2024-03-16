import { generate } from "random-words";

const palabras = generate(20);
const filtradas = palabras.filter(palabra => {
    if(palabra.includes('a')){
        console.log(palabra.replace('a', 'YES'));
        return
    }else{
        return palabra
    }
})

console.log(palabras)