// Book
class Libro {
    private titulo: string;
    private autor: string;
    private prestadoA: string | null;
    private historialPrestamos: string[];

    constructor(titulo: string, autor: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.prestadoA = null;
        this.historialPrestamos = [];
    }
    

    obtenerTitulo(): string {
        return this.titulo;
    }

    imprimirDetalles(): void {
        console.log(`Título del libro: ${this.titulo}, Autor: ${this.autor}`);
        if (this.prestadoA) {
            console.log(`Prestado a: ${this.prestadoA}`);
        } else {
            console.log("Disponible para prestar.");
        }
    }

    prestar(libroPrestadoA: string): void {
        if (!this.prestadoA) {
            this.prestadoA = libroPrestadoA;
            this.historialPrestamos.push(libroPrestadoA);
            console.log(`${this.titulo} fue prestado a ${libroPrestadoA}`);
        } else {
            console.log(`${this.titulo} ya está prestado a ${this.prestadoA}`);
        }
    }

    devolver(): void {
        if (this.prestadoA) {
            console.log(`${this.titulo} fue devuelto.`);
            this.prestadoA = null;
        } else {
            console.log(`${this.titulo} no estaba prestado.`);
        }
    }

    obtenerHistorialPrestamos(): string[] {
        return this.historialPrestamos;
    }
}

// Book Instance
const libro = new Libro("El principito", "Antoine de Saint-Exupéry");
libro.imprimirDetalles();

// Lend 
libro.prestar("Bryan");

// Return
libro.devolver();

//History
console.log(`Historial de préstamos de: ${libro.obtenerTitulo()}`, libro.obtenerHistorialPrestamos());


