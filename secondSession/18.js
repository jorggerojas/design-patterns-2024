import { generate } from "random-words";

const words = generate(50).map(word => {
    if (word.length === 4) return "HOLA";
    else if (word.length > 4) return "MUNDO";
    else return "ADIOS";
  });
  

  console.log(words);;