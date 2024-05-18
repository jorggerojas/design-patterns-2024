interface Sujetoo {
  operacion(): string;
}

class SujetooReal implements Sujetoo {
  public operacion(): string {
    return "Operación realizada en el sujeto real";
  }
}

class Proxy1 implements Sujetoo {
  private sujetooReal: Sujetoo;

  constructor(sujetooReal: Sujetoo) {
    this.sujetooReal = sujetooReal;
  }

  public operacion(): string {
    console.log("Antes de la operación real"); // Registro previo
    const resultado = this.sujetooReal.operacion();
    console.log("Después de la operación real"); // Registro posterior
    return resultado;
  }
}

// Ejemplo de uso
const sujetooReal = new SujetooReal();
const proxy1 = new Proxy1(sujetooReal);

console.log(proxy1.operacion()); // Imprime:
                                 // Antes de la operación real
                                 // Operación realizada en el sujeto real
                                 // Después de la operación real
