
// Clase buena: abierta para su extensión
interface OperacionMatematica {
  ejecutar(a: number, b: number): number;
}

class Suma implements OperacionMatematica {
  ejecutar(a: number, b: number): number {
    return a + b;
  }
}

class Resta implements OperacionMatematica {
  ejecutar(a: number, b: number): number {
    return a - b;
  }
}

class Calculadora {
  private operaciones: OperacionMatematica[] = [];

  agregarOperacion(operacion: OperacionMatematica): void {
    this.operaciones.push(operacion);
  }

  calcular(a: number, b: number): number {
    for (const operacion of this.operaciones) {
      const resultado = operacion.ejecutar(a, b);
      if (resultado !== undefined) {
        return resultado;
      }
    }

    throw new Error("Operación matemática no encontrada");
  }
}

const calculadora = new Calculadora();
calculadora.agregarOperacion(new Suma());
calculadora.agregarOperacion(new Resta());

console.log(calculadora.calcular(10, 5)); // 15
console.log(calculadora.calcular(10, -5)); // 5
