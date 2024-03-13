import {generate} from "random-words";

const random = generate(50)

const inicial = 0;
const suma = random.reduce((acumulador, valor) => acumulador + valor.length, inicial,);

console.log("Cantidad de letras")
console.log(suma)