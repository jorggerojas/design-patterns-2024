
class Triangulo  {
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



class Cuadrilatero {
  private lado: number;

  constructor(lado: number) {
    this.lado = lado;
  }

  calcularArea(): number {
    return this.lado * this.lado;
  }
}



// Abstraccion

abstract class Figura {
  abstract calcularArea(): number; 
}

//subclase triangulo

class subTriangulo extends Figura {
  constructor(private base: number, private altura: number) {
      super();
  }

  calcularArea(): number {
      return this.base * this.altura;
  }
}

//subclase cuadrilatero

class subCuadrilatero extends Figura {
  constructor(private lado1: number, private lado2: number) {
    super();
}

calcularArea(): number {
    return this.lado1 * this.lado2;
}
  
}

// Polimorfismo
function imprimirDetallesFigura(figura: Figura): void {
  console.log("Área:", figura.calcularArea()); 
  console.log(); 
}

//ejemplos

const triangulo = new subTriangulo (5, 3);
const cuadrilatero = new subCuadrilatero (7,7);

console.log("Métodos de la clase triangulo: ")
imprimirDetallesFigura(triangulo);

console.log("Métodos de la clase cuadrilatero: ")
imprimirDetallesFigura(cuadrilatero);



