class Persona {
    constructor(public nombre: string, public edad: number) {}
  
    imprimirDetalles() {
      console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
  }
  
  class Estudiante extends Persona {
    constructor(nombre: string, edad: number, public grado: string) {
      super(nombre, edad);
    }
  
    imprimirDetalles() {
      super.imprimirDetalles();
      console.log(`Grado: ${this.grado}`);
    }
  }
  
  class Profesor extends Persona {
    constructor(nombre: string, edad: number, public materia: string) {
      super(nombre, edad);
    }
  
    imprimirDetalles() {
      super.imprimirDetalles();
      console.log(`Materia: ${this.materia}`);
    }
  }
  
  class Libro {
    constructor(public titulo: string, public autor: string) {}
  
    imprimirDetalles() {
      console.log(`Título: ${this.titulo}, Autor: ${this.autor}`);
    }
  }

  class BibliotecaLibros {
    private libros: Libro[] = [];
    private prestamoActual: { libro: Libro; prestatario: Persona } | null = null;
  
    agregarLibro(libro: Libro) {
      this.libros.push(libro);
    }
  
    prestarLibro(libro: Libro, prestatario: Persona) {
      if (this.prestamoActual && this.prestamoActual.libro === libro) {
        console.log(`El libro ${libro.titulo} ya está prestado.`);
        return;
      }
  
      this.prestamoActual = { libro, prestatario };
      console.log(`El libro ${libro.titulo} ha sido prestado a ${prestatario.nombre}.`);
    }
  
    devolverLibro(libro: Libro) {
      if (!this.prestamoActual || this.prestamoActual.libro !== libro) {
        console.log(`El libro ${libro.titulo} no está prestado.`);
        return;
      }
  
      console.log(`El libro ${libro.titulo} ha sido devuelto por ${this.prestamoActual.prestatario.nombre}.`);
      this.prestamoActual = null;
    }
  }
  
  class Empleado extends Persona {
    constructor(nombre: string, edad: number, public salario: number, public cargo: string) {
      super(nombre, edad);
    }
  
    imprimirDetalles() {
      super.imprimirDetalles();
      console.log(`Salario: ${this.salario}, Cargo: ${this.cargo}`);
    }
  }
  
  class PersonaConEdadValidada extends Persona {
    private _edadValidada: number;
  
    constructor(nombre: string, edad: number) {
      super(nombre, edad);
      this._edadValidada = edad;
    }
  
    get edadValidada() {
      return this._edadValidada;
    }
  
    set edadValidada(value: number) {
      if (value < 0) {
        throw new Error('La edad no puede ser negativa');
      }
      this._edadValidada = value;
    }
  }
  
  class Rectangulo {
    constructor(public ancho: number, public alto: number) {}
  
    calcularArea() {
      return this.ancho * this.alto;
    }
  
    calcularPerimetro() {
      return 2 * (this.ancho + this.alto);
    }
  }
  
  class Circulo {
    constructor(public radio: number) {}
  
    calcularArea() {
      return Math.PI * this.radio ** 2;
    }
  
    calcularPerimetro() {
      return 2 * Math.PI * this.radio;
    }
  }
  
  abstract class FiguraGeometrica {
    abstract calcularArea(): number;
    abstract calcularPerimetro(): number;
  }
  
  function imprimirInformacionFigura(figura: FiguraGeometrica) {
    console.log(`Área: ${figura.calcularArea()}`);
    console.log(`Perímetro: ${figura.calcularPerimetro()}`);
  }
  
  // Ejemplos de uso
  const persona = new Persona('Juan', 30);
  persona.imprimirDetalles();
  
  const estudiante = new Estudiante('María', 20, 'Segundo año');
  estudiante.imprimirDetalles();
  
  const profesor = new Profesor('Pedro', 45, 'Matemáticas');
  profesor.imprimirDetalles();
  
  const libro = new Libro('El Señor de los Anillos', 'J.R.R. Tolkien');
  libro.imprimirDetalles();
  
  const biblioteca = new BibliotecaLibros();
  biblioteca.agregarLibro(libro);
  biblioteca.prestarLibro(libro, persona);
  biblioteca.devolverLibro(libro);
  
  const empleado = new Empleado('Ana', 35, 3500, 'Gerente');
  empleado.imprimirDetalles();
  
  const personaValidada = new PersonaConEdadValidada('Juan', 30);
  console.log(personaValidada.edadValidada); // 30
  // personValidada.edadValidada = -5; // Lanzarq un error
  
  const rectangulo = new Rectangulo(5, 3);
  imprimirInformacionFigura(rectangulo);
  
  const circulo = new Circulo(2);
  imprimirInformacionFigura(circulo);