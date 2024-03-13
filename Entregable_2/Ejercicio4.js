import {generate} from "random-words";

const random = generate(20)

random.map(function (palabra){
    if(palabra.length > 5) {
        console.log("- " + palabra)
    }
})