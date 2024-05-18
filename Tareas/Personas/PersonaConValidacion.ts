class PersonaConValidacion {
    private _edad: number;

    constructor(public nombre: string, edad: number) {
        this._edad = edad;
    }

    get edad(): number {
        return this._edad;
    }

    set edad(value: number) {
        if (value < 0 || value > 120) {
            throw new Error('Edad no válida');
        }
        this._edad = value;
    }

    imprimirDetalles(): void {
        console.log(`Nombre: ${this.nombre}, Edad: ${this._edad}`);
    }
}

export default PersonaConValidacion;
