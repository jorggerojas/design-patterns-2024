import { generate } from "random-words";    
 let ejercicio = generate(20);

 let filtrar = ejercicio.map(function(palabra){
    if(palabra.includes("a")){
        return palabra.replaceAll("a","YES");
    }
    else return palabra
    
 });
 console.log(filtrar)