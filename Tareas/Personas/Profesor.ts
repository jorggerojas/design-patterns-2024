import Persona from './Persona';

class Profesor extends Persona {
    constructor(nombre: string, edad: number, public asignatura: string) {
        super(nombre, edad);
    }

    imprimirDetalles(): void {
        super.imprimirDetalles();
        console.log(`Asignatura: ${this.asignatura}`);
    }
}

export default Profesor;
