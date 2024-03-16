import { generate } from "random-words";    
 let ejercicio = generate(20);

 let reverse  = ejercicio.slice();
 
 reverse.shift();
 reverse.pop();
 console.log(reverse);
 console.log(ejercicio);