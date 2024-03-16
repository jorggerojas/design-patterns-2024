import {generate} from 'random-words'

const palabras = generate(50);

const resultado = palabras.map(palabra=>{
    const palabraMayusculas = palabra.toUpperCase();
    return { [palabra]: palabraMayusculas };
})

console.log(resultado);