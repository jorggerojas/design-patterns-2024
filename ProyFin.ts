class Persona {
    // Paso 1 --> Completo
    nom: string;
    edad: number;
    constructor(nom: string, edad: number){
        this.nom = nom;
        this.edad = edad;
    }
    mostrarDatos(): void {
        console.log("Nombre: ", this.nom);
        console.log("Edad: ", this.edad);
    }
    getNom(): string{
        return this.nom;
    }
    getEdad(): number{
        return this.edad;
    }
    setNom(nom: string): void{
        this.nom = nom;
    }
    setEdad(edad: number): void{
        this.edad = edad;
    }
}

class Estudiante extends Persona {
    // Paso 2 --> Completo
    calificaciones: number[];
    constructor (nom: string, edad: number, calificaciones: number[]){
        super(nom, edad);
        this.calificaciones = calificaciones;
    }
    mostrarDatos(): void{
        console.log("Nombre: ", this.nom);
        console.log("Edad: ", this.edad);
        for(let i = 0; i < this.calificaciones.length; i++){
            console.log("Calificacion ", (i+1),": ",this.calificaciones[i]);
        }
        console.log("Promedio: ", this.calcularPromedio());
    }
    calcularPromedio(): number{
        var sum = 0;
        for(let i = 0; i < this.calificaciones.length; i++){
            sum = sum + this.calificaciones[i];
        }
        var p = (sum / this.calificaciones.length)
        return p;
    }
    getNom(): string{
        return this.nom;
    }
    getEdad(): number{
        return this.edad;
    }
    getCalif(): number[] {
        return this.calificaciones;
    }
    setNom(nom: string): void{
        this.nom = nom;
    }
    setEdad(edad: number): void{
        this.edad = edad;
    }
    setCalif(calif: number[]): void{
        this.calificaciones = calif;
    }
}

class Profesor extends Persona {
    // Paso 2 --> Completo 
    materia: string;
    constructor (nom: string, edad: number, materia: string){
        super(nom, edad);
        this.materia = materia;
    }
    mostrarDatos(): void{
        console.log("Nombre: ", this.nom);
        console.log("Edad: ", this.edad);
        console.log("Materia: ", this.materia);
    }
    calificarExamen(): void{
        console.log("Ya casi estan calificados.")
    }
    getNom(): string{
        return this.nom;
    }
    getEdad(): number{
        return this.edad;
    }
    getMateria(): string {
        return this.materia;
    }
    setNom(nom: string): void{
        this.nom = nom;
    }
    setEdad(edad: number): void{
        this.edad = edad;
    }
    setMateria(materia: string): void {
        this.materia = materia;
    }
}

class Libro {
    // Paso 3 --> Completo
    titulo: string;
    autor: string;
    prestamos: string[];
    prestado: boolean;
    constructor(titulo: string, autor: string, prestamos: string[],){
        this.titulo = titulo;
        this.autor = autor;
        this.prestamos = prestamos;
        this.prestado = false;
    }
    mostrarDatos(): void {
        console.log("Titulo: ", this.titulo);
        console.log("Autor: ", this.autor);
        console.log("Prestamos: ");
        for(let i = 0; i<this.prestamos.length; i++){
            console.log(this.prestamos[i]);
        }
        if(this.prestado == true){
            console.log("El libro se le ha prestado a ", this.prestamos[this.prestamos.length-1]);
        }
    }
    // Paso 4 --> Completo
    prestarLibro(persona: Persona): void {
        if(this.prestado != true){
            this.prestamos[this.prestamos.length] = persona.getNom();
            this.prestado = true;
            console.log("El libro se le ha prestado a ", this.prestamos[this.prestamos.length-1]);
        } else {
            console.log("El libro ya fue prestado a ", this.prestamos[this.prestamos.length-1])
        }
    }
    devolverLibro(): void {
        console.log("El libro fue regresado.")
        this.prestado = false;
    }
    getTitulo(): string{
        return this.titulo;
    }
    getAutor(): string{
        return this.autor;
    }
    getPrestamos(): string[] {
        return this.prestamos;
    }
    getPrestado(): boolean {
        return this.prestado;
    }
    setTitulo(titulo: string): void{
        this.titulo = titulo;
    }
    setAutor(autor: string): void{
        this.autor = autor;
    }
    setPrestamos(prestamos: string[]): void {
        this.prestamos = prestamos;
    }
    setPrestado(prestado: boolean): void {
        this.prestado = prestado;
    }
}

class Empleado extends Persona {
    // Paso 5 --> Completo
    salario: number;
    cargo: string;
    constructor (nom: string, edad: number, cargo: string, salario: number){
        super(nom, edad);
        this.cargo = cargo;
        this.salario = salario;
    }
    mostrarDatos(): void{
        console.log("Nombre: ", this.nom);
        console.log("Edad: ", this.edad);
        console.log("Cargo: ", this.cargo);
        console.log("Salario: ", this.salario);
    }
}

class Rectangulo {
    // Paso 7 --> Completo
    alto: number;
    ancho: number;
    constructor(alto: number, ancho: number){
        this.ancho = ancho;
        this.alto = alto;
    }
    calcularArea(): number {
        var area = this.alto * this.ancho;
        return area;
    }
    calcularPerimetro(): number {
        var perimetro = ((2*this.alto) + (2*this.ancho));
        return perimetro;
    }
}

class Circulo {
    // Paso 8 --> Completo
    diametro: number;
    pi = Math.PI;
    constructor(diametro: number){
        this.diametro = diametro;
    }
    calcularArea(): number {
        var r = this.diametro/2;
        var area = this.pi * r * r;
        return area;
    }
    calcularPerimetro(): number {
        var perimetro = (this.pi * this.diametro);
        return perimetro;
    }
}

abstract class FiguraGeometrica {
    // Paso 9 --> Completo
    abstract calcularArea(): number;
    abstract calcularPerimetro(): number;
}

class AbRectangulo extends FiguraGeometrica{
    // Paso 9 --> Completo
    ancho: number;
    alto: number;
    constructor(ancho: number, alto: number){
        super();
        this.ancho = ancho;
        this.alto = alto;
    }
    calcularArea(): number {
        var area = this.ancho * this.alto;
        return area;
    }
    calcularPerimetro(): number {
        var perimetro = ((2*this.alto) + (2*this.ancho));
        return perimetro;
    }
}

class AbCirculo extends FiguraGeometrica {
    // Paso 9 --> Completo
    diametro: number;
    pi = Math.PI;
    constructor(diametro: number){
        super();
        this.diametro = diametro;
    }
    calcularArea(): number {
        var r = this.diametro/2;
        var area = this.pi * r * r;
        return area;
    }
    calcularPerimetro(): number {
        var perimetro = (this.pi * this.diametro);
        return perimetro;
    }
}

class figuraGeometrica {
    // Paso 10 --> Completo
    calcularArea(figura: FiguraGeometrica,): number {
        return figura.calcularArea()
    }
    calcularPerimetro(figura: FiguraGeometrica,): number {
        return figura.calcularPerimetro()
    }
}

// Paso 6 --> Completo

/*const Mat = new Persona("Mateo", 19);
const Mat2 = new Persona("David", 20);
const Mat3 = new Persona("Dwyer", 47);
const Mat4 = new Persona("Morris", 9);
var x: string[] = []
var libro1 = new Libro("Percy Jackson", "Rick Riordan", x);
libro1.prestarLibro(Mat);
libro1.mostrarDatos();
libro1.prestarLibro(Mat2);
libro1.devolverLibro();
libro1.prestarLibro(Mat2);
libro1.devolverLibro();
libro1.prestarLibro(Mat3);
libro1.devolverLibro();
libro1.prestarLibro(Mat4);
libro1.mostrarDatos();


const Mat = new Persona("Mateo", 19);

Mat.mostrarDatos();

const mat = new Estudiante("David", 19, [5,7,9,10]);

mat.mostrarDatos();

const fg = new figuraGeometrica();
const circ = new Circulo(20);
const rect = new Rectangulo(5, 10);
console.log(fg.calcularArea(circ))
console.log(fg.calcularPerimetro(rect));*/