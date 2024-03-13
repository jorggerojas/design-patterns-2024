import {generate} from "random-words";

const random = generate(20)
random.sort()
random.map(function (palabra){
    console.log("- " + palabra)
})