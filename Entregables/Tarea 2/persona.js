// 1. Clase Persona
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    imprimirDetalles() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}

// 2. Subclases de Persona
class Estudiante extends Persona {
    constructor(nombre, edad, grado) {
        super(nombre, edad);
        this.grado = grado;
    }

    imprimirDetalles() {
        super.imprimirDetalles();
        console.log(`Grado: ${this.grado}`);
    }
}

class Profesor extends Persona {
    constructor(nombre, edad, asignatura) {
        super(nombre, edad);
        this.asignatura = asignatura;
    }

    imprimirDetalles() {
        super.imprimirDetalles();
        console.log(`Asignatura: ${this.asignatura}`);
    }
}

// 3. Clase Libro
class Libro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.prestamos = [];
    }

    imprimirDetalles() {
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}`);
    }

    // 4. Métodos para prestar y devolver el libro
    prestar(persona) {
        this.prestamos.push(persona);
    }

    devolver(persona) {
        this.prestamos = this.prestamos.filter(p => p !== persona);
    }
}

// 5. Clase Empleado
class Empleado extends Persona {
    constructor(nombre, edad, salario, cargo) {
        super(nombre, edad);
        this.salario = salario;
        this.cargo = cargo;
    }

    imprimirDetalles() {
        super.imprimirDetalles();
        console.log(`Salario: ${this.salario}, Cargo: ${this.cargo}`);
    }
}

// 6. Utilizar getters y setters
class PersonaConValidacion extends Persona {
    constructor(nombre, edad) {
        super(nombre, edad);
    }

    get edad() {
        return this._edad;
    }

    set edad(value) {
        if (value < 0) {
            throw new Error("La edad no puede ser negativa");
        }
        this._edad = value;
    }
}