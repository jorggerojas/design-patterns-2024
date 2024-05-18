// 1. Clase Persona
class Persona {
    constructor(public nombre: string, public edad: number) {}
  
    // Método para imprimir detalles de la persona
    imprimirDetalles() {
      console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
  }
  
  // 2. Subclases: Estudiante y Profesor
  class Estudiante extends Persona {
    constructor(nombre: string, edad: number, public grado: string) {
      super(nombre, edad);
    }
  
 
    estudiar() {
      console.log(`${this.nombre} está estudiando.`);
    }
  }
  
  class Profesor extends Persona {
    constructor(nombre: string, edad: number, public especialidad: string) {
      super(nombre, edad);
    }
  
   
    enseñar() {
      console.log(`${this.nombre} está enseñando.`);
    }
  }
  
  // 3. Clase Libro
  class Libro {
    constructor(public titulo: string, public autor: string) {}
  
    // Método para imprimir detalles del libro
    imprimirDetalles() {
      console.log(`Título: ${this.titulo}, Autor: ${this.autor}`);
    }
  }
  
  // 4. Agregar métodos para prestar y devolver el libro
  class LibroConRegistro extends Libro {
    prestadoA: string | null = null;
  
    prestarLibro(nombre: string) {
      if (!this.prestadoA) {
        this.prestadoA = nombre;
        console.log(`${this.titulo} prestado a ${nombre}.`);
      } else {
        console.log(`${this.titulo} ya está prestado a ${this.prestadoA}.`);
      }
    }
  
    devolverLibro() {
      if (this.prestadoA) {
        console.log(`${this.titulo} devuelto por ${this.prestadoA}.`);
        this.prestadoA = null;
      } else {
        console.log(`${this.titulo} no estaba prestado.`);
      }
    }
  }
  
  // 5. Clase Empleado que hereda de Persona
  class Empleado extends Persona {
    constructor(nombre: string, edad: number, public salario: number, public cargo: string) {
      super(nombre, edad);
    }
  }
  
  // 6. Utilizar getters y setters
  class PersonaConValidacion {
    constructor(private _nombre: string, private _edad: number) {}
  
    get nombre() {
      return this._nombre;
    }
  
    set nombre(nuevoNombre: string) {
      // Validación de datos
      if (nuevoNombre.length > 0) {
        this._nombre = nuevoNombre;
      } else {
        console.error("El nombre no puede estar vacío.");
      }
    }
  
    get edad() {
      return this._edad;
    }
  
    set edad(nuevaEdad: number) {
      // Validación de datos
      if (nuevaEdad >= 0) {
        this._edad = nuevaEdad;
      } else {
        console.error("La edad no puede ser negativa.");
      }
    }
  }
  
  // 7. Clase Rectángulo
  class Rectángulo {
    constructor(public ancho: number, public alto: number) {}
  
    calcularArea() {
      return this.ancho * this.alto;
    }
  
    calcularPerimetro() {
      return 2 * (this.ancho + this.alto);
    }
  }
  
  // 8. Clase Círculo
  class Círculo {
    constructor(public radio: number) {}
  
    calcularArea() {
      return Math.PI * this.radio ** 2;
    }
  
    calcularCircunferencia() {
      return 2 * Math.PI * this.radio;
    }
  }
  
  // 9. Clase abstracta FiguraGeometrica
  abstract class FiguraGeometrica {
    abstract calcularArea(): number;
    abstract calcularPerimetro(): number;
  }
  
  class Rectángulo extends FiguraGeometrica {
    constructor(public ancho: number, public alto: number) {
      super();
    }
  
    calcularArea() {
      return this.ancho * this.alto;
    }
  
    calcularPerimetro() {
      return 2 * (this.ancho + this.alto);
    }
  }
  
  class Círculo extends FiguraGeometrica {
    constructor(public radio: number) {
      super();
    }
  
    calcularArea() {
      return Math.PI * this.radio ** 2;
    }
  
    calcularPerimetro() {
      return 2 * Math.PI * this.radio;
    }
  }
  
  // 10. Polimorfismo
  function imprimirDetallesFigura(figura: FiguraGeometrica) {
    console.log(`Área: ${figura.calcularArea()}, Perímetro: ${figura.calcularPerimetro()}`);
  }
  
  // Ejemplo de uso
  const rectángulo = new Rectángulo(5, 10);
  const círculo = new Círculo(7);
  
  imprimirDetallesFigura(rectángulo); // Imprime detalles del rectángulo
  imprimirDetallesFigura(círculo); // Imprime detalles del círculo
  