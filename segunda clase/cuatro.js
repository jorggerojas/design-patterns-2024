import { generate } from "random-words";    
 let ejercicio = generate(20);

 let filtrar = ejercicio.filter(function(palabra){
    return palabra.length > 5;
 });

 console.log(filtrar)