import {generate} from "random-words";

const random = generate(20)

random.map(function (palabra){
    if(palabra.includes('a')) {
        console.log("- " + palabra.replace('a', "YES"))
    } else {
        console.log("- " + palabra)
    }  
})