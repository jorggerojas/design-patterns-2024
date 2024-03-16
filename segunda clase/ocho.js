import { generate } from "random-words";    
 let ejercicio = generate(20);

 let reverse  = ejercicio.slice().reverse();
 console.log(reverse);
 console.log(ejercicio);