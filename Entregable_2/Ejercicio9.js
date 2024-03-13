import {generate} from "random-words";

const random = generate(20)
random.shift()
random.pop()
random.map(function (palabra){
    console.log("- " + palabra)
})