// Interfaz para las estrategias de cálculo de área
class AreaStrategy {
    calculateArea() {
      throw new Error('El método calculateArea debe ser implementado en las clases hijas.');
    }
  }
  
  // Estrategias concretas para cada figura
  class TriangleStrategy extends AreaStrategy {
    constructor(base, height) {
      super();
      this.base = base;
      this.height = height;
    }
  
    calculateArea() {
      return 0.5 * this.base * this.height;
    }
  }
  
class CircleStrategy extends AreaStrategy {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}
  
  class SquareStrategy extends AreaStrategy {
    constructor(side) {
      super();
      this.side = side;
    }
  
    calculateArea() {
      return this.side ** 2;
    }
  }
  
  class RectangleStrategy extends AreaStrategy {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  }
  
  class RhombusStrategy extends AreaStrategy {
    constructor(diagonalMayor, diagonalMenor) {
      super();
      this.diagonalMayor = diagonalMayor;
      this.diagonalMenor = diagonalMenor;
    }
  
    calculateArea() {
      return 0.5 * this.diagonalMayor * this.diagonalMenor;
    }
  }
  
  class TrapezoidStrategy extends AreaStrategy {
    constructor(baseMayor, baseMenor, height) {
      super();
      this.baseMayor = baseMayor;
      this.baseMenor = baseMenor;
      this.height = height;
    }
  
    calculateArea() {
      return 0.5 * (this.baseMayor + this.baseMenor) * this.height;
    }
  }
  
  // Función para calcular el área utilizando la estrategia correspondiente
  function calculateArea(areaStrategy) {
    return areaStrategy.calculateArea();
  }
  
  // Ejemplos de uso
  const triangleStrategy = new TriangleStrategy(5, 3);
  console.log('Área del triángulo:', calculateArea(triangleStrategy)); // 7.5
  
  const circleStrategy = new CircleStrategy(2);
  console.log('Área del círculo:', calculateArea(circleStrategy)); // 12.566370614359172
  
  const squareStrategy = new SquareStrategy(4);
  console.log('Área del cuadrado:', calculateArea(squareStrategy)); // 16
  
  const rectangleStrategy = new RectangleStrategy(3, 6);
  console.log('Área del rectángulo:', calculateArea(rectangleStrategy)); // 18
  
  const rhombusStrategy = new RhombusStrategy(6, 4);
  console.log('Área del rombo:', calculateArea(rhombusStrategy)); // 12
  
  const trapezoidStrategy = new TrapezoidStrategy(5, 3, 4);
  console.log('Área del trapecio:', calculateArea(trapezoidStrategy)); // 16