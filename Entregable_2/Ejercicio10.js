import {generate} from "random-words";

const random = generate(50)
random.unshift("¡Hola!")
random.push("¡Hola!")

console.log(random)