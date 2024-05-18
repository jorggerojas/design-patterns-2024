export abstract class Persona {
  protected nombre: string;
  protected edad: number;

  public constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  public abstract mostrarInfo(): void;

  public getNombre() {
    return this.nombre;
  }

  public setNombre(nuevoNombre: string) {
    this.nombre = nuevoNombre;
  }
}
