import { generate } from "random-words";

const words = generate(50);

const result = words.map(word => ({ [word]: word.toUpperCase() }));
for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
}
