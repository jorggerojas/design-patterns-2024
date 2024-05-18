import { Persona } from "./Persona";

class Profesor extends Persona {
  private expediente: number;

  public constructor(nombre: string, edad: number, expediente: number) {
    super(nombre, edad);
    this.expediente = expediente;
  }

  public mostrarInfo(): void {
    console.log(
      `Nombre: ${this.nombre}, edad: ${this.edad}, expediente: ${this.expediente}`
    );
  }
}
