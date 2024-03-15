import { generate } from "random-words";

let words = generate(50).find(word => word === "army");

if(words) {
    console.log("Found the word " + words);
}else{
    console.log("Word not found");
}