import { generate } from "random-words";

const palabras = generate(20);

console.log('Palabras con s o r: ');
const filtrado = palabras.filter((palabra) =>  //incluye palabras que tienen r o s
    (palabra.includes("s") || palabra.includes("r")))

console.log(filtrado);


console.log('\nPalabras sin s o r: ');
const filtrado1 = palabras.filter((palabra) =>  //excluye las palabras que tienen r o s
!(palabra.includes("s") || palabra.includes("r")));

console.log(filtrado1);