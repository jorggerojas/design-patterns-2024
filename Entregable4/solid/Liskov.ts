// Figura geométrica abstracta
abstract class FiguraGeometrica {
  abstract calcularArea(): number;
  abstract calcularPerimetro(): number;
}

// Cuadrado
class Cuadrado extends FiguraGeometrica {
  constructor(public lado: number) {
    super();
  }

  calcularArea(): number {
    return this.lado * this.lado;
  }

  calcularPerimetro(): number {
    return 4 * this.lado;
  }
}

// Círculo
class Circulo extends FiguraGeometrica {
  calcularPerimetro(): number {
    throw new Error("Method not implemented.");
  }
  constructor(public radio: number) {
    super();
  }

  calcularArea(): number {
    return Math.PI * this.radio * this.radio;
  }
}