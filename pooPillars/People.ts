// Person
class Person {
    protected nombre: string;
    protected edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    imprimirDetalles(): void {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}

// Student
class Estudiante extends Person {
    protected grado: string;

    constructor(nombre: string, edad: number, grado: string) {
        super(nombre, edad);
        this.grado = grado;
    }

    imprimirDetalles(): void {
        super.imprimirDetalles();
        console.log(`Grado de Estudios: ${this.grado}`);
    }

    // Método único para Estudiante
    estudiar(): void {
        console.log(`${this.nombre} está estudiando para sus exámenes.`);
    }
}

// Professor
class Profesor extends Person {
    protected materia: string;

    constructor(nombre: string, edad: number, materia: string) {
        super(nombre, edad);
        this.materia = materia;
    }

    imprimirDetalles(): void {
        super.imprimirDetalles();
        console.log(`Imparte la materia de: ${this.materia}`);
    }

    // Método único para Profesor
    investigar(): void {
        console.log(`${this.nombre} está investigando sobre nuevos métodos de enseñanza.`);
    }
}

// Employee
class Empleado extends Person {
    private salario: number;
    private cargo: string;

    constructor(nombre: string, edad: number, salario: number, cargo: string) {
        super(nombre, edad);
        this.salario = salario;
        this.cargo = cargo;
    }

    // Getter y setter para salario
    getSalario(): number {
        return this.salario;
    }

    setSalario(nuevoSalario: number): void {
        if (nuevoSalario >= 0) {
            this.salario = nuevoSalario;
        } else {
            console.log("El salario del empleado no puede ser negativo");
        }
    }

    imprimirDetalles(): void {
        super.imprimirDetalles();
        console.log(`Cargo en su trabajo: ${this.cargo}, Salario: ${this.salario}`);
    }

    // Método único para Empleado
    trabajar(): void {
        console.log(`${this.nombre} está trabajando en su puesto de ${this.cargo}.`);
    }
}

// Instancias y pruebas
const estudiante = new Estudiante("Bryan", 20, "Universitario");
estudiante.imprimirDetalles();
estudiante.estudiar(); // Método único para Estudiante

const profesor = new Profesor("Enrique", 26, "Programación");
profesor.imprimirDetalles();
profesor.investigar(); // Método único para Profesor

const empleado = new Empleado("Moises", 20, 3000, "Parrillero");
empleado.imprimirDetalles();
empleado.trabajar(); // Método único para Empleado
