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

//Deportista
class Deportista extends Person {
    constructor(nombre: string, edad: number, public deporte: string) {
      super(nombre, edad);
    }
  
    entrenar(): void {
      console.log(`${this.nombre} está entrenando ${this.deporte}`);
    }
  }

// Musico
class Músico extends Person {
    constructor(nombre: string, edad: number, public instrumento: string) {
      super(nombre, edad);
    }
  
    tocar(): void {
      console.log(`${this.nombre} está tocando ${this.instrumento}`);
    }
  }

// Artista
class Artista extends Person {
    constructor(nombre: string, edad: number, public especialidad: string) {
      super(nombre, edad);
    }
  
    crearObra(): void {
      console.log(`${this.nombre} está creando una obra de ${this.especialidad}`);
    }
  }
// Consts
const deportista = new Deportista("María", 25, "Fútbol");
deportista.imprimirDetalles(); // Nombre: María, Edad: 25
deportista.entrenar(); // María está entrenando Fútbol

const músico = new Músico("Pedro", 30, "Guitarra");
músico.imprimirDetalles(); // Nombre: Pedro, Edad: 30
músico.tocar(); // Pedro está tocando Guitarra

const artista = new Artista("Sofía", 22, "Pintura");
artista.imprimirDetalles(); // Nombre: Sofía, Edad: 22
artista.crearObra(); // Sofía está creando una obra de Pintura