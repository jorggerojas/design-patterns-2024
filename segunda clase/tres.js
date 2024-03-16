import { generate } from "random-words";    
 let ejercicio = generate(20);

 let filtrar = ejercicio.filter(function(palabra){
    return palabra.includes("r") || palabra.includes("s");
 });

 console.log(filtrar)