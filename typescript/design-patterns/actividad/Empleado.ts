import { Persona } from "./Persona";

class Empleado extends Persona {
  private salario: number;
  private puesto: string;
  public constructor(
    nombre: string,
    edad: number,
    salario: number,
    puesto: string
  ) {
    super(nombre, edad);
    this.salario = salario;
    this.puesto = puesto;
  }

  public mostrarInfo(): void {
    console.log(
      `Nombre: ${this.nombre}, edad: ${this.edad}, salario: ${this.salario}, puesto: ${this.puesto}`
    );
  }
}
