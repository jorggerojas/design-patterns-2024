import { generate } from "random-words";

let ejemplo = generate(50);
let arr = [];

ejemplo.forEach(palabra => {
   
    arr.push(palabra, palabra.toUpperCase());
});

console.log(arr);
