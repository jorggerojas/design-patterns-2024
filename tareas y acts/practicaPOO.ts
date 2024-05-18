//-----------------------------PASO 1----------------------------
class Persona{
    protected nombre: string
    protected edad: number

    constructor(nombre: string, edad:number){
        this.nombre = nombre
        this.edad = edad
    }

    printData(){
        console.log('\nLos datos de la persona son:')
        console.log('Nombre: ' + this.nombre + '\nEdad: ' + this.edad)
    }
}

const persona: Persona = new Persona('Miguel', 43)
persona.printData()


//----------------------------PASO 2--------------------------
class Estudiante extends Persona{
    protected grupo: string

    constructor(nombre: string, edad:number, grupo: string){
        super(nombre, edad)
         this.grupo = grupo
    }

    asistir(){
        console.log(this.nombre + ' asistió al escuela.')
    }
}

const estudiante: Estudiante = new Estudiante('Pablo', 19, 'G30')
estudiante.printData()
estudiante.asistir()

class Profesor extends Persona{
    protected materias: string[]

    constructor(nombre: string, edad: number, materias: string[]){
        super(nombre, edad)
        this.materias = materias
    }

    darClase(){
        console.log(this.nombre + ' dio clases hoy.')
    }
}

const profesor: Profesor = new Profesor('Pablo', 38, ['Algebra','Calculo dif', 'Calculo vec'])
profesor.printData()
profesor.darClase()

//----------------------------------------PASO 3------------------------
class Libro {
    protected titulo: string;
    protected autor: string;
    protected prestatarios: string[] = [];
    protected prestadoA: string | null = null;

    constructor(titulo: string, autor: string) {
        this.titulo = titulo;
        this.autor = autor;
    }

    printData() {
        console.log('\nLos datos del libro son:');
        console.log('Titulo: ' + this.titulo + '\nAutor: ' + this.autor);
        if (this.prestadoA) {
            console.log('Prestado a: ' + this.prestadoA);
        } else {
            console.log('El libro no está prestado actualmente.');
        }
    }

//------------------------------PASO 4-------------------
    prestar(nombre: string) {
        if (this.prestadoA) {
            console.log(`El libro ya está prestado a ${this.prestadoA}.`);
        } else {
            this.prestadoA = nombre;
            this.prestatarios.push(nombre);
            console.log(`El libro ha sido prestado a ${nombre}.`);
        }
    }

    devolver() {
        if (this.prestadoA) {
            console.log(`El libro ha sido devuelto por ${this.prestadoA}.`);
            this.prestadoA = null;
        } else {
            console.log('El libro no está prestado actualmente.');
        }
    }
}

const libro = new Libro('Cien Años de Soledad', 'Gabriel García Márquez');
libro.printData();
libro.prestar('Juan');
libro.devolver();
libro.printData();

//-----------------------------------PASO 5-----------------------------
class Empleado extends Persona {
    protected salario: number;
    protected cargo: string;

    constructor(nombre: string, edad: number, salario: number, cargo: string) {
        super(nombre, edad);
        this.salario = salario;
        this.cargo = cargo;
    }

//--------------------------------PASO 6-------------------------------
    getSalario(): number {
        return this.salario;
    }

    setSalario(salario: number) {
        if (salario >= 0) {
            this.salario = salario;
        } else {
            throw new Error('El salario debe ser un número no negativo');
        }
    }

    getCargo(): string {
        return this.cargo;
    }

    setCargo(cargo: string) {
        if (cargo.length > 0) {
            this.cargo = cargo;
        } else {
            throw new Error('El cargo no puede estar vacío');
        }
    }
}

const empleado = new Empleado('Juan', 30, 50000, 'Ingeniero');
empleado.printData();
empleado.setSalario(55000);
empleado.setCargo('Senior Ingeniero');
empleado.printData();

//---------------------------------PASO 9------------------------------
abstract class FiguraGeometrica {
    abstract calcularArea(): number;
    abstract calcularPerimetro(): number;
}

//-----------------------------------PASO 7------------------------------------
class Rectangulo extends FiguraGeometrica {
    private ancho: number;
    private alto: number;

    constructor(ancho: number, alto: number) {
        super();
        this.ancho = ancho;
        this.alto = alto;
    }

    calcularArea(): number {
        return this.ancho * this.alto;
    }

    calcularPerimetro(): number {
        return 2 * (this.ancho + this.alto);
    }
}


const rectangulo = new Rectangulo(5, 10);
console.log('\nÁrea del Rectángulo: ' + rectangulo.calcularArea());
console.log('Perímetro del Rectángulo: ' + rectangulo.calcularPerimetro());

//-----------------------------------------PASO 8-------------------------------------
class Circulo extends FiguraGeometrica {
    public radio: number;

    constructor(radio: number) {
        super();
        this.radio = radio;
    }

    calcularArea(): number {
        return Math.PI * Math.pow(this.radio, 2);
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.radio;
    }
}

const circulo = new Circulo(7);
console.log('\nÁrea del Círculo: ' + circulo.calcularArea());
console.log('Circunferencia del Círculo: ' + circulo.calcularPerimetro());

//------------------------------PASO 10----------------------------
function imprimirDetalles(figura: FiguraGeometrica): void {
    console.log('Área: ' + figura.calcularArea());
    console.log('Perímetro: ' + figura.calcularPerimetro());
}

const rectangulo1 = new Rectangulo(5, 10);
const circulo1 = new Circulo(7);

console.log('\nDetalles del Rectángulo:');
imprimirDetalles(rectangulo1);

console.log('\nDetalles del Círculo:');
imprimirDetalles(circulo1);