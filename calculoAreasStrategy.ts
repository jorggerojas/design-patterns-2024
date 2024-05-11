interface Figura {
    calcularArea(): number;
}
  
class Triangulo implements Figura {
    private base: number;
    private altura: number;
  
    constructor(base: number, altura: number) {
      this.base = base;
      this.altura = altura;
    }
  
    calcularArea(): number {
      return (this.base * this.altura) / 2;
    }
}

class Circulo implements Figura {
    private radio: number;
  
    constructor(radio: number) {
      this.radio = radio;
}
  
    calcularArea(): number {
      return Math.PI * Math.pow(this.radio, 2);
    }
}
  
class Cuadrado implements Figura {
    private lado: number;
  
    constructor(lado: number) {
      this.lado = lado;
    }
  
    calcularArea(): number {
      return Math.pow(this.lado, 2);
    }
}
  
class Rectangulo implements Figura {
    private base: number;
    private altura: number;
  
    constructor(base: number, altura: number) {
      this.base = base;
      this.altura = altura;
    }
  
    calcularArea(): number {
      return this.base * this.altura;
    }
}
  
class Trapecio implements Figura {
    private baseMayor: number;
    private baseMenor: number;
    private altura: number;
  
    constructor(baseMayor: number, baseMenor: number, altura: number) {
      this.baseMayor = baseMayor;
      this.baseMenor = baseMenor;
      this.altura = altura;
    }
  
    calcularArea(): number {
      return ((this.baseMayor + this.baseMenor) * this.altura) / 2;
    }
}
  
 
function calcularAreaFigura(figura: Figura): number {
    return figura.calcularArea();
}
  
let triangulo: Figura = new Triangulo(5, 4);
let circulo: Figura = new Circulo(3);
let cuadrado: Figura = new Cuadrado(8);
let rectangulo: Figura = new Rectangulo(6, 4);
let trapecio: Figura = new Trapecio(10, 5, 4);
  
console.log(`Área del triángulo: ${calcularAreaFigura(triangulo)}`);
console.log(`Área del círculo: ${calcularAreaFigura(circulo)}`);
console.log(`Área del cuadrado: ${calcularAreaFigura(cuadrado)}`);
console.log(`Área del rectángulo: ${calcularAreaFigura(rectangulo)}`);
console.log(`Área del trapecio: ${calcularAreaFigura(trapecio)}`);

function calcularAreaTotal(figuras: Figura[]): number {
  let areaTotal = 0;
  for (const figura of figuras) {
      areaTotal += figura.calcularArea();
  }
  return areaTotal;
}

const figuras: Figura[] = [
  new Triangulo(5, 4),
  new Circulo(3),
  new Cuadrado(8),
  new Rectangulo(6, 4),
  new Trapecio(10, 5, 4)
];

console.log(`Área total de todas las figuras: ${calcularAreaTotal(figuras)}`);
  