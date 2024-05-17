class Persona {
    private _nombre: string;
    private _edad: number;

    constructor(nombre: string, edad: number) {
        this._nombre = nombre;
        this._edad = edad;
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    get edad(): number {
        return this._edad;
    }

    set edad(edad: number) {
        this._edad = edad;
    }

    imprimirDetalles(): void {
        console.log(`Nombre: ${this._nombre}, Edad: ${this._edad}`);
    }
}

// --------------------

class Estudiante extends Persona {
    grado: string;

    constructor(nombre: string, edad: number, grado: string) {
        super(nombre, edad);
        this.grado = grado;
    }

    imprimirDetalles(): void {
        super.imprimirDetalles();
        console.log(`Grado: ${this.grado}`);
    }

    estudiar(): void {
        console.log(`${this.nombre} está estudiando.`);
    }
}

// ---------------------

class Profesor extends Persona {
    materia: string;

    constructor(nombre: string, edad: number, materia: string) {
        super(nombre, edad);
        this.materia = materia;
    }

    imprimirDetalles(): void {
        super.imprimirDetalles();
        console.log(`Materia: ${this.materia}`);
    }

    enseñar(): void {
        console.log(`${this.nombre} está enseñando ${this.materia}.`);
    }
}

// Ejemplo de uso
const estudiante = new Estudiante("Ana", 20, "Quinto");
estudiante.imprimirDetalles();
estudiante.estudiar();

const profesor = new Profesor("Carlos", 45, "Física");
profesor.imprimirDetalles();
profesor.enseñar();

// ---------------------

class Libro {
    titulo: string;
    autor: string;
    prestadoA: string[];

    constructor(titulo: string, autor: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.prestadoA = [];
    }

    imprimirDetalles(): void {
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}`);
    }

    prestar(nombre: string): void {
        this.prestadoA.push(nombre);
        console.log(`El libro "${this.titulo}" ha sido prestado a ${nombre}.`);
    }

    devolver(nombre: string): void {
        const index = this.prestadoA.indexOf(nombre);
        if (index !== -1) {
            this.prestadoA.splice(index, 1);
            console.log(`El libro "${this.titulo}" ha sido devuelto por ${nombre}.`);
        } else {
            console.log(`El libro "${this.titulo}" no estaba prestado a ${nombre}.`);
        }
    }
}

// Ejemplo de uso
const libro = new Libro("Cien Años de Soledad", "Gabriel García Márquez");
libro.imprimirDetalles();
libro.prestar("Ana");
libro.devolver("Ana");

// ---------------------

class Empleado extends Persona {
    private _salario: number;
    private _cargo: string;

    constructor(nombre: string, edad: number, salario: number, cargo: string) {
        super(nombre, edad);
        this._salario = salario;
        this._cargo = cargo;
    }

    get salario(): number {
        return this._salario;
    }

    set salario(salario: number) {
        this._salario = salario;
    }

    get cargo(): string {
        return this._cargo;
    }

    set cargo(cargo: string) {
        this._cargo = cargo;
    }

    imprimirDetalles(): void {
        super.imprimirDetalles();
        console.log(`Salario: ${this._salario}, Cargo: ${this._cargo}`);
    }

    trabajar(): void {
        console.log(`${this.nombre} está trabajando como ${this.cargo}.`);
    }
}

// Ejemplo de uso
const empleado = new Empleado("Luis", 35, 50000, "Ingeniero de Software");
empleado.imprimirDetalles();
empleado.trabajar();
empleado.salario = 55000; 
empleado.imprimirDetalles(); 