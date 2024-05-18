class Persona {
    private Nombre: string;
    private Edad: number;

    constructor(Nombre: string, Edad: number){
        this.Nombre = Nombre;
        this.Edad = Edad;
    }

    get getNombre(): string{
        return this.Nombre;
    }

    get getEdad(): number{
        return this.Edad;
    }

    set setNombre(nuevoNombre: string){
        this.Nombre = nuevoNombre;
    }

    set setEdad(nuevaEdad: number){
        if(nuevaEdad > 0){
            this.Edad = nuevaEdad;
        }else{
            console.error('ERROR - Edad invalida');
        }
    }

    detalles(): void{
        console.log('Nombre: ',this.Nombre,' Edad: ',this.Edad);
    }
}

class Estudiante extends Persona{
    private Promedio: number;

    constructor(Nombre: string, Edad: number, Promedio: number){
        super(Nombre, Edad);
        this.Promedio = Promedio;
    }

    get getPromedio(): number{
        return this.Promedio;
    }

    set setPromedio(nuevoPromedio: number){
        if(nuevoPromedio >= 5 && nuevoPromedio <= 10){
            this.Promedio = nuevoPromedio;
        }
    }
    
    detalles(): void{
        super.detalles();
        console.log('Promedio: ', this.Promedio);
    }

    hacerTarea(): void{
        console.log('Haciendo tarea...');
    }

    entregar_tarea(): void{
        console.log('Tarea entregada');
    }
}

class Profesor extends Persona{
    private Materia: string;

    constructor(Nombre: string, Edad: number, Materia: string){
        super(Nombre, Edad);
        this.Materia = Materia;
    }

    detalles(): void {
        super.detalles();
        console.log('Materia: ',this.Materia);
    }

    calificacion(): number{
        return Math.floor(Math.random() * (10 - 5 + 1) + 5);
    }

    calificarTarea(): void{
        console.log('Tu calificacion de tu tarea en ', this.Materia ,' es: ', this.calificacion());
    }

}

class Libro {
    private titulo: string;
    private autor: string;
    private prestamos: string[];
    private personaprestamo: string[];

    constructor(titulo: string, autor: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.prestamos = [];
        this.personaprestamo = [];
    }

    imprimirDetalles(): void {
        console.log('Titulo: ' , this.titulo, ' Autor: ',this.autor);
    }

    get Titulos(): string{
        return this.titulo;
    }

    prestar(persona: string): void{
        const libro: string = this.Titulos;        
        if(!this.prestamos.includes(libro)){
            this.prestamos.push(libro);
            this.personaprestamo.push(persona);
            console.log('El libro', libro, 'a sido prestado a', persona);
        } else {
            const posicion: number = this.prestamos.indexOf(libro);
            console.log('El libro', libro, 'ya fue prestado a', this.personaprestamo[posicion]);
        }
    }

    devolver(persona:string): void{ 
        const libro: string = this.Titulos;
        const posicion: number = this.prestamos.indexOf(libro);
        if(this.prestamos.includes(libro) && this.personaprestamo[posicion] === persona){
            console.log('El libro',libro,'prestado',this.personaprestamo[posicion],'a sido devuelto');
            this.prestamos.splice(posicion,1);
            this.personaprestamo.splice(posicion,1);
        }else{
            console.log('El libro nunca fue prestado')
        }
    }
}

/*const libro = new Libro('Cien años de soledad', 'Gabriel García Márquez');
const yo = new Persona('Jeffey',19);
libro.imprimirDetalles(); // Imprime: titulo: Cien años de soledad, Autor: Gabriel García Márquez
libro.prestar('Alex');
libro.devolver('Jeffrey');
libro.prestar('Alex');*/


class Empleado extends Persona{
    private cargo: string
    private salario: number;

    constructor(Nombre: string, Edad: number,cargo: string, salario: number){
        super(Nombre, Edad);
        this.cargo = cargo;
        this.salario = salario
    }

    get getSalario(): number{
        return this.salario;
    }

    set setSalario(nuevosalario: number){
        if(nuevosalario > 0){
            this.salario = nuevosalario;
        }else{
            console.error('ERROR - Salario invalido');
        }
    }
}


class FiguraGeometrica{
    calcularArea(){}
    calcularPerimetro(){}
}

class rectangulo extends FiguraGeometrica{
    private ancho: number;
    private largo: number;

    constructor(ancho: number, largo: number){
        super();
        this.ancho = ancho;
        this.largo = largo;
    }

    calcularArea(): number{
        return this.ancho * this.largo;
    }

    calcularPerimetro(): number{
        return (2 * this.ancho) + (2 * this.largo);
    }   
}

const rec = new rectangulo(4, 5);
console.log('Area: ',rec.calcularArea())
console.log('Perimetro: ',rec.calcularPerimetro())


class circulo extends FiguraGeometrica{
    private radio: number;

    constructor(radio: number){
        super();
        this.radio = radio;
    }

    calcularArea(): number{
        return Math.PI * Math.pow(this.radio, 2);
    }

    calcularPerimetro(): number{
        return Math.PI * (2 * this.radio);
    }
}

function calcular(figura: FiguraGeometrica): void {
    const area = figura.calcularArea();
    const perimetro = figura.calcularPerimetro();
    console.log("Área:", area);
    console.log("Perímetro:", perimetro);
}

const fig:FiguraGeometrica = new rectangulo(4, 7)

