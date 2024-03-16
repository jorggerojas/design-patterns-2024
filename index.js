import { generate } from 'random-words';
// Ejercicio 1
console.log(generate(20));

// Ejercicio 2
const words = generate(20);
words.forEach(word => {
  console.log(word);
});

// Ejercicio 3
const palabras1 = generate(20);
const filteredWords = palabras1.filter(word => word.includes('s') || word.includes('r'));
console.log(filteredWords);

// Ejercicio 4
const palabras2 = generate(20);
const palabrasFiltradas = palabras2.filter(word => word.length >= 6);
console.log(palabrasFiltradas);

// Ejercicio 5
const palabras3 = generate(20);
const palabrasModificadas1 = palabras3.map(word => word.replace(/a/g, 'YES'));
console.log(palabrasModificadas1);

// Ejercicio 6
const palabras4 = generate(20);
const palabrasModificadas2 = palabras4.map(word => word.length >= 6 ? 'NO' : word);
console.log(palabrasModificadas2);

// Ejercicio 7
const palabras5 = generate(20);
const palabrasOrdenadas = palabras5.sort();
console.log(palabrasOrdenadas);

// Ejercicio 8
const palabras6 = generate(20);
const palabrasInvertidas = palabras6.reverse();
console.log(palabrasInvertidas);

// Ejercicio 9
const palabras7 = generate(20);
palabras7.shift();
palabras7.pop();
console.log(palabras7);

// Ejercicio 10
const palabras8 = generate(20);
const palabrasConHola = palabras8.map(word => `¡Hola! ${word} ¡Hola!`);
console.log(palabrasConHola);

// Ejercicio 11
const palabras9 = generate(20);
const palabrasConMayusculas = [];
palabras9.forEach(word => {
    palabrasConMayusculas.push(word);
    palabrasConMayusculas.push(word.toUpperCase());
});
console.log(palabrasConMayusculas);

// Ejercicio 12
const palabras10 = generate(20);
const palabraArmy = palabras10.find(word => word === "army");
console.log(palabraArmy);

// Ejercicio 13
const palabras11 = generate(20);
const resultado1 = palabras11.join(' ');
console.log(resultado1);

// Ejercicio 14
const palabras12 = generate(20);
const resultado2 = palabras12.map(word => word.toUpperCase()).join(' ');
console.log(resultado2);

// Ejercicio 15
const palabras13 = generate(20);
const resultado3 = palabras13.map(word => ({ [word]: word.toUpperCase() }));
console.log(resultado3);

// Ejercicio 16
const palabras14 = generate(20);
const resultado4 = palabras14.map(word => ({ [word]: word.length }));
console.log(resultado4);

// Ejercicio 17
const palabras15 = generate(20);
const resultado5 = palabras15.filter(word => word.length >= 6).map(word => ({ [word]: word.length }));
console.log(resultado5);

// Ejercicio 18
const palabras16 = generate(20);
const resultado6 = palabras16.map(word => {
    if (word.length === 4) {
        return 'HOLA';
    } else if (word.length > 4) {
        return 'MUNDO';
    } else {
        return 'ADIOS';
    }
});
console.log(resultado6);

// Ejercicio 19
const palabras17 = generate(20);
const resultado7 = palabras17.map(word => word.length);
console.log(resultado7);

// Ejercicio 20
const palabras18 = generate(20);
const resultado8 = palabras18.reduce((acc, word) => {
    acc[word] = word.length;
    return acc;
}, {});
console.log(resultado8);