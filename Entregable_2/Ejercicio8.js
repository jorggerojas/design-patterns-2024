import {generate} from "random-words";

const random = generate(20)
random.reverse()
random.map(function (palabra){
    console.log("- " + palabra)
})