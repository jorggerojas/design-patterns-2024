import { generate } from "random-words";

const words = generate(50);

const joinedString = words.join(" ");

console.log(joinedString);

