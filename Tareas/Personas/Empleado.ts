import Persona from './Persona';

class Empleado extends Persona {
    constructor(nombre: string, edad: number, public salario: number, public cargo: string) {
        super(nombre, edad);
    }

    imprimirDetalles(): void {
        super.imprimirDetalles();
        console.log(`Salario: ${this.salario}, Cargo: ${this.cargo}`);
    }
}

export default Empleado;
