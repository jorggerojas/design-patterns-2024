import { Persona } from "./Persona";

class Estudiante extends Persona {
  private expediente: number;
  private grado: number;
  private grupo: number;
  public constructor(
    nombre: string,
    edad: number,
    expediente: number,
    grado: number,
    grupo: number
  ) {
    super(nombre, edad);
    this.expediente = expediente;
    this.grado = grado;
    this.grupo = grupo;
  }

  public mostrarInfo(): void {
    console.log(
      `Nombre: ${this.nombre}, edad: ${this.edad}, expediente: ${this.expediente}, grado: ${this.grado}, grupo: ${this.grupo}`
    );
  }
}
