import { Circulo } from "./Circulo";
import { FiguraGeométrica } from "./FiguraGeometrica";
import { Rectangulo } from "./Rectangulo";

function calcular(figura: FiguraGeométrica) {
  return figura.calcularArea(), figura.calcularPerímetro();
}

const rectangulo = new Rectangulo(5, 10);
const circulo = new Circulo(10);

console.log(calcular(rectangulo));
console.log(calcular(circulo));
