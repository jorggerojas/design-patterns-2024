
//1. Crear una clase 'PERSONA'
class Persona {
    nombre: string
    edad: number

    constructor (nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    showData() {
        console.log('NOMBRE:', this.nombre, '\nEDAD:', this.edad);
    }
}

//2. Crear subclases
class Profesor extends Persona {
    materia: string;
   
    constructor(nombre: string, edad: number, materia: string) {
        super(nombre, edad);
        this.materia = materia;
    }

    darClases() {
        console.log(this.nombre, ' da clase de: ', this.materia);
    }

}

class Estudiante extends Persona {
    materia: string;
    hora: Date;
   
    constructor(nombre: string, edad: number, materia: string, hora: Date) {
        super(nombre, edad);
        this.materia = materia;
        this.hora = hora;
    }

    tomarClases() {
        console.log(this.nombre, ' toma clases de: ', this.materia, '\nA las: ', this.hora.getHours());
    }
}

//5. Implementar herencia
class Empleado implements Persona {

    nombre: string;
    edad: number;
    salario: number;
    cargo: string;

    constructor(nombre: string, edad: number, salario: number, cargo: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.salario = salario;
        this.cargo = cargo;
    }

    showData(): void {
        console.log('NOMBRE:', this.nombre, '\nEDAD:', this.edad, 
            '\nCARGO:', this.cargo, '\nSALARIO:', this.salario
        );
    }

}