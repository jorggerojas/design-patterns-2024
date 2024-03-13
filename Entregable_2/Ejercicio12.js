import {generate} from "random-words";

const random = generate(50)

console.log(random)
console.log(random.find((element) => element == 'army'))