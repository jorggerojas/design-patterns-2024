class Libro {
    private prestadoA: string[] = [];

    constructor(public titulo: string, public autor: string) {}

    imprimirDetalles(): void {
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}`);
    }

    prestar(libro: string): void {
        this.prestadoA.push(libro);
        console.log(`El libro "${this.titulo}" ha sido prestado a ${libro}`);
    }

    devolver(libro: string): void {
        const index = this.prestadoA.indexOf(libro);
        if (index > -1) {
            this.prestadoA.splice(index, 1);
            console.log(`El libro "${this.titulo}" ha sido devuelto por ${libro}`);
        } else {
            console.log(`El libro "${this.titulo}" no estaba prestado a ${libro}`);
        }
    }

    getPrestados(): string[] {
        return this.prestadoA;
    }
}

export default Libro;
