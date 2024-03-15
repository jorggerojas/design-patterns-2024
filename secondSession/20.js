import { generate } from "random-words";

const words = generate(50).reduce((objeto, palabra) => {
    objeto[palabra] = palabra.length;
    return objeto;
  }, {});
  
  console.log(words);