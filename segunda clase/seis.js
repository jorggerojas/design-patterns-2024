import { generate } from "random-words";    
 let ejercicio = generate(20);

 let filtrar = ejercicio.map(function(palabra){
    if(palabra.length > 5){
        return palabra.replaceAll(palabra,"NO");
    }
    else return palabra
    
 });
 console.log(filtrar)