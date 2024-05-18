interface Figura {
    calcularArea(): number;
  }

  // Triángulo
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
  
  // Círculo
  class Circunferencia implements Figura {
    private radio: number;
  
    constructor(radio: number) {
      this.radio = radio;
    }
  
    calcularArea(): number {
      return Math.PI * this.radio * this.radio;
    }
  }
  
  // Cuadrilátero (ejemplo con cuadrado)
  class Cuadrilatero implements Figura {
    private lado: number;
  
    constructor(lado: number) {
      this.lado = lado;
    }
  
    calcularArea(): number {
      return this.lado * this.lado;
    }
  }
  
  // Rectángulo
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
  

  class CalculadoraArea {
    private figura: Figura;
  
    constructor(figura: Figura) {
      this.figura = figura;
    }
  
    calcularArea(): number {
      return this.figura.calcularArea();
    }
  
    setFigura(figura: Figura): void {
      this.figura = figura;
    }
  }

  // Ejemplo de cálculo de área de un triángulo
const triangulo = new Triangulo(5, 4);
const calculadoraAreaTriangulo = new CalculadoraArea(triangulo);
const areaTriangulo = calculadoraAreaTriangulo.calcularArea();
console.log("Área del triángulo:", areaTriangulo); // 10

// Ejemplo de cálculo de área de un círculo
const circulo = new Circunferencia(3);
const calculadoraAreaCirculo = new CalculadoraArea(circulo);
const areaCirculo = calculadoraAreaCirculo.calcularArea();
console.log("Área del círculo:", areaCirculo); // 28.27433388230512

// Ejemplo de cálculo de área de un cuadrado (cuadrilátero)
const cuadrado = new Cuadrilatero(4);
const calculadoraAreaCuadrado = new CalculadoraArea(cuadrado);
const areaCuadrado = calculadoraAreaCuadrado.calcularArea();
console.log("Área del cuadrado:", areaCuadrado); // 16

// Ejemplo de cálculo de área de un rectángulo
const rectangulo = new Rectangulo(6, 4);
const calculadoraAreaRectangulo = new CalculadoraArea(rectangulo);
const areaRectangulo = calculadoraAreaRectangulo.calcularArea();
console.log("Área del rectángulo:", areaRectangulo); // 24
