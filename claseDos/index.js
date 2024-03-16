import { generate } from "random-words";

const palabras = generate(50)
var resultado = palabras.map(function(obj){
    if(obj.length === 4){
        var rObj = 'HOLA'
    }else if(obj.length>4){
        var rObj = 'MUNDO'
    }else{
        var rObj = 'ADIOS'
    }
    return rObj;
})
console.log (resultado)