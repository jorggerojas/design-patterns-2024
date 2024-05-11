interface Operacion {
    ejecutar(a: number, b: number): number;
  }
  
  class Suma implements Operacion {
    ejecutar(a: number, b: number): number {
      return a + b;
    }
  }
  
  class Resta implements Operacion {
    ejecutar(a: number, b: number): number {
      return a - b;
    }
  }
  
  class Multiplicacion implements Operacion {
    ejecutar(a: number, b: number): number {
      return a * b;
    }
  }
  
  class Division implements Operacion {
    ejecutar(a: number, b: number): number {
      if (b === 0) {
        throw new Error("División por cero no permitida");
      }
      return a / b;
    }
  }
  
  class Calculadora {
    private operacion: Operacion;
  
    constructor(operacion: Operacion) {
      this.operacion = operacion;
    }
  
    setOperacion(operacion: Operacion): void {
      this.operacion = operacion;
    }
  
    calcular(a: number, b: number): number {
      return this.operacion.ejecutar(a, b);
    }
  }
  
  const suma = new Suma();
  const resta = new Resta();
  const multiplicacion = new Multiplicacion();
  const division = new Division();
  
  const calculadora = new Calculadora(suma);
  
  console.log(calculadora.calcular(2, 3));
  calculadora.setOperacion(resta);
  console.log(calculadora.calcular(5, 3));
  calculadora.setOperacion(multiplicacion);
  console.log(calculadora.calcular(4, 6));
  calculadora.setOperacion(division);
  console.log(calculadora.calcular(10, 2));