import { generate } from "random-words";

const words = generate(20);
words.map(word => console.log(word));