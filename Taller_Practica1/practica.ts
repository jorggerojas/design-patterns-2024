
//6)Utilizar getters y setters

//1)Crear una clase 'Persona'
//?No podia usar Persona asi que use PersonaU.
class PersonaU{
    nombre:string;
    edad: number;
    
    constructor (nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    mostrarDatos() {
        console.log(`Nombre: ${this.nombre}\n Edad: ${this.edad}`);
    }

    getNombre(){
        return this.nombre;
    }
    getEdad(){
        return this.edad;
    }

    setNombre(nombre: string) {
        this.nombre = nombre;
    }

    setEdad(edad: number) {
        this.edad = edad;
    }
}

//2)Crear subclases (Estudiante, Profesor):
class Estudiante extends PersonaU{
    calificacion: number;

    constructor(nombre: string, edad: number,calificacion:number) {
        super(nombre, edad);
        this.calificacion = calificacion;
    }

    recibirCalifacion() {
        console.log(`Calicacion: ${this.calificacion}`);
    }

    getCalificacion() {
        return this.calificacion;
    }

    setCalificacion(calificacion: number) {
        this.calificacion = calificacion;
    }
}

class Profesor extends PersonaU{
    materia:string;
    horario:string;

    constructor(nombre: string, edad: number, materia: string, horario:string) {
        super(nombre, edad);
        this.materia = materia;
        this.horario = horario;
    }

    darClases() {
        console.log(`Materia: ${this.materia} \n Horario: ${this.horario}`);
    }

    getMateria() {
        return this.materia;
    }

    setMateria(materia: string) {
        this.materia = materia;
    }

    getHorario() {
        return this.horario;
    }

    setHorario(horario: string) {
        this.horario = horario;
    }
}

//3)Crear una clase 'Libro'
//4)Agregar métodos
class Libro{
    private titulo:string;
    private autor:string;
    private prestadoA:PersonaU | null = null;

    constructor(titulo:string, autor:string){
        this.titulo = titulo;
        this.autor = autor;
    }

    detallesLibro(){
        console.log(`Titulo: ${this.titulo}\n Autor: ${this.titulo}`);
    }


    prestarLibro(persona: PersonaU) {
        if (!this.prestadoA) {
            this.prestadoA = persona;
            console.log(`El libro "${this.titulo}" ha sido prestado a ${persona.nombre}.`);
        } else {
            console.log(`El libro "${this.titulo}" ya está prestado a ${this.prestadoA.nombre}.`);
        }
    }

    devolverLibro() {
        if (this.prestadoA) {
            console.log(`El libro "${this.titulo}" ha sido devuelto por ${this.prestadoA.nombre}.`);
            this.prestadoA = null;
        } else {
            console.log(`El libro "${this.titulo}" no estaba prestado.`);
        }
    }

    getTitulo() {
        return this.titulo;
    }

    setTitulo(titulo: string) {
        this.titulo = titulo;
    }

    getAutor() {
        return this.autor;
    }

    setAutor(autor: string) {
        this.autor = autor;
    }

    getPrestadoA() {
        return this.prestadoA;
    }

}

//5)Implementar herencia

class Empleado extends PersonaU{
    salario:number;
    cargo:string;

    constructor(salario:number, cargo:string,nombre:string, edad:number){
        super(nombre,edad);
        this.salario = salario;
        this.cargo = cargo
    }

    getSalario() {
        return this.salario;
    }

    setSalario(salario: number) {
        this.salario = salario;
    }

    getCargo() {
        return this.cargo;
    }

    setCargo(cargo: string) {
        this.cargo = cargo;
    }
}


//9)Crear una clase 'FiguraGeometrica'
abstract class FiguraGeometrica{
    abstract calcularArea():number;
    abstract calcularPerimetro():number;
}

//7)Crear una clase 'Rectángulo'

class Rectangulo extends FiguraGeometrica{
    alto:number;
    ancho: number;
    constructor(alto:number,ancho:number){
        super();
        this.alto = alto;
        this.ancho = ancho;
    }

    calcularArea():number{
        return(this.ancho*this.alto);
    }

    calcularPerimetro():number{
        return((this.ancho+this.alto)*2);
    }

    getAlto() {
        return this.alto;
    }

    setAlto(alto: number) {
        this.alto = alto;
    }

    getAncho() {
        return this.ancho;
    }

    setAncho(ancho: number) {
        this.ancho = ancho;
    }
}
//8)Crear una clase 'Círculo'
class Circulo extends FiguraGeometrica{
    radio: number;

    constructor(radio:number){
        super();
        this.radio = radio;
    }

    calcularArea():number{
        return(Math.PI * Math.pow(this.radio, 2));
    }

    calcularPerimetro():number{
        return(2 * (Math.PI * this.radio));
    }

    getRadio() {
        return this.radio;
    }

    setRadio(radio: number) {
        this.radio = radio;
    }
}


//10)Aplicar polimorfismo
function calcularAreaYPerimetro(figura: FiguraGeometrica):void{
    const area = figura.calcularArea();
    const perimetro = figura.calcularPerimetro();
    console.log("Área:", area);
    console.log("Perímetro:", perimetro);
}