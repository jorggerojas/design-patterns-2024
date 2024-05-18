import { generate } from 'random-words';

const palabras = generate(50)
const ahm = palabras.map(palabra =>{ 
    if (palabra.length>=4) return 'MUNDO'
    else if (palabra.length<=4) return 'ADIOS'
    else return 'HOLA'
})

console.log(ahm)