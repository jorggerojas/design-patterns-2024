import {generate} from "random-words";

const palabras = generate(20)

palabras.forEach((element) => console.log("- " + element))
