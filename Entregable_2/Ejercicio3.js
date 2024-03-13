import {generate} from "random-words";

const random = generate(20)

random.map(function (palabra){
    if(palabra.includes('s' || 'r')){
        console.log("- " + palabra)
    }
})