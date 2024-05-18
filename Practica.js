/*
Cervantes Álvarez Karen
Patrones de diseño
*/

class Persona{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    data(){
        console.log(`Nombre: ${this.name}, Edad: ${this.age}`);
    }
}

class Estudiante extends Persona{
    constructor(name, age, grade){
        //agregar otra función especifica
        super(name, age);
        this.grade = grade;
    }
    data(){
        super.data();
        console.log(`Grado: ${this.grade}`);
    }
}

class Profesor extends Persona{
    constructor(name, age, subject){
        super(name, age);
        this.subject = subject;
    }
    data(){
        supe.data();
        console.log(`Materia: ${this.subject}`);
    }
}

class Libro{
    constructor(title, author){
        this.title = title;
        this.author = author;
        this.borrow1 = null;
    }
    data(){
        console.log(`Titulo: ${this.title}, Autor: ${this.author}`);
    }
    borrow(persona){
        if(!this.borrow1){
            this.borrow1 = persona;
            consosle.log(`Libro en poseción de ${persona.name}`);
        }else{
            console.log("Libro no disponible");
        }
    }
    returnBook(){
        if(this.borrow1){
            console.log(`Libro devuelto. Último prestamo por ${this.borrow1.name}`);
            this.borrow1 = null;
        }else{
            console.log("El libro está disponible");
        }
    }
}

class Empleado extends Persona{
    constructor(name, age, salary, job){
        super(name, age);
        this.salary = salary;
        this.job = job;
    }
    getSalary(){
        return this.salary;
    }
    setSalary(newSalary){
        if(newSalary>0){
            this.salary = newSalary;
        }else{
            console.log("El salario debe ser mayor de $0.00");
        }
    }
    data(){
        super.data();
        console.log(`Salario: ${this.salary}, Puesto: ${this.job}`);
    }
}

const p1 = new Persona("Karen", 19);
const e1 = new Estudiante("Mateo", 19, "Universidad");
const prof1 = new Profesor("Florinda", 42, "Artes");

p1.data();
e1.data();
prof1.data();

const book1 = new Libro("El principito", "Antoine de Saint-Exupery");
const book2 = new Libro("Colorín colorado este cuento aún no se ha acabado", "Odin Dupeyron");

book1.borrow(p1);
book2.borrow(e1);
book1.returnBook();
book2.returnBook();

const empleado1 = new Empleado("Gabriela", 25, 4500, "Supervisora");
empleado1.salary = 5000;
empleado1.data();