class Persona {
    constructor(public nombre: string, public edad: number) {}

    imprimirDetalles(): void {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}

export default Persona;
