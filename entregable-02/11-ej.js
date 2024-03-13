import { generate } from "random-words";

let palabras = generate(50);
let length = palabras.length;

console.log("Agregando valores a un array: ");

for (let i = 1; i <= length; i += 2){ /* El índice va asi porque se están agregando valores 
                                       * a los indices impares del arreglo :-) */
    palabras.splice(i, 0, palabras[i - 1].toUpperCase());/* En este método indico que
                                                          se va agregar el valor del indice anterior en mayusculas, pues, el indice inició en 1 (tomara el valor de 0) y luego irá a 3 y tomará el valor de 2 y asi consecutivamente */
    length++;
}

console.log(palabras);