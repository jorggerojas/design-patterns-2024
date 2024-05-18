import Persona from './Persona';

class Estudiante extends Persona {
    constructor(nombre: string, edad: number, public matricula: string) {
        super(nombre, edad);
    }

    imprimirDetalles(): void {
        super.imprimirDetalles();
        console.log(`Matrícula: ${this.matricula}`);
    }
}

export default Estudiante;
