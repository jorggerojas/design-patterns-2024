//encapsulacion

class Triangulo1 {
  private base: number;
  private altura: number;

  constructor(base: number, altura: number) {
    this.setBase(base);
    this.altura = altura;
  }

  private getBase(): number {
    return this.base;
  }

  private setBase(base: number): void {
    if (base > 0) {
      this.base = base;
    } else {
      console.error("La base debe ser mayor que 0");
    }
  }

  calcularArea(): number {
    return (this.getBase() * this.altura) / 2;
  }
}

class Cuadrilatero1 {
  private lado: number;

  constructor(lado: number) {
    this.setLado(lado);
  }

  private getLado(): number {
    return this.lado;
  }

  private setLado(lado: number): void {
    if (lado > 0) {
      this.lado = lado;
    } else {
      console.error("El lado debe ser mayor que 0");
    }
  }

  calcularArea(): number {
    return this.getLado() * this.getLado();
  }
}



class subTriangulo1 extends Figura {
  private base: number;
  private altura: number;

  constructor(base: number, altura: number) {
    super();
    this.setBase(base);
    this.altura = altura;
  }

  private getBase(): number {
    return this.base;
  }

  private setBase(base: number): void {
    if (base > 0) {
      this.base = base;
    } else {
      console.error("La base debe ser mayor que 0");
    }
  }

  calcularArea(): number {
    return this.getBase() * this.altura;
  }
}


class subCuadrilatero1 extends Figura {
  private lado1: number;
  private lado2: number;

  constructor(lado1: number, lado2: number) {
    super();
    this.setLado1(lado1);
    this.setLado2(lado2);
  }

  private getLado1(): number {
    return this.lado1;
  }

  private setLado1(lado1: number): void {
    if (lado1 > 0) {
      this.lado1 = lado1;
    } else {
      console.error("El lado 1 debe ser mayor que 0");
    }
  }

  private getLado2(): number {
    return this.lado2;
  }

  private setLado2(lado2: number): void {
    if (lado2 > 0) {
      this.lado2 = lado2;
    } else {
      console.error("El lado 2 debe ser mayor que 0");
    }
  }

  calcularArea(): number {
    return this.getLado1() * this.getLado2();
  }
}

const trianguloEquilatero = new subTriangulo1(6, 5.2); // Base 6, altura 5.2

const trianguloIsosceles = new subTriangulo1(8, 7); // Base 8, altura 7

const cuadrado = new subCuadrilatero1(10, 10);


const rectangulo = new subCuadrilatero1(5, 7);





console.log("Área del triángulo equilátero:", trianguloEquilatero.calcularArea()); // Aproximadamente 15.6
console.log("Área del triángulo isósceles:", trianguloIsosceles.calcularArea()); // 28

console.log("Área del cuadrado:", cuadrado.calcularArea()); // 100
console.log("Área del rectángulo:", rectangulo.calcularArea()); // 35


