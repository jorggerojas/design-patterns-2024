class Persona{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    showData(): void{
        console.log("Nombre: ", this.name);
        console.log("Edad: ", this.age);
    }

    getName(): string{
        return this.name;
    }

    setName(name: string){
        this.name = name;
    }

    getAge(): number{
        return this.age;
    }

    setAge(age: number){
        this.age = age;
    }
}

class Estudiante extends Persona{
    id: number;
    subjects: string[];
    
    constructor(name: string, age: number, id: number, subjects: string[]){
        super(name, age);
        this.id = id;
        this.subjects = subjects;
    }

    showData(): void{
        console.log("Nombre: ", this.name);
        console.log("Edad: ", this.age);
        console.log("Expediente: ", this.id);
        //this.registerSubjects();
    }

    registerSubjects(subjects: string[]): void{
        for(let i=0; i<this.subjects.length; i++){
            console.log("Materia ", (i+1),": ",this.subjects[i]);
        }
    }
}

class Profesor extends Persona{
    subject: string;

    constructor(name: string, age: number, subject: string){
        super(name, age);
        this.subject = subject;
    }

    showData(): void{
        console.log("Nombre: ", this.name);
        console.log("Edad: ", this.age);
        console.log("Materia: ", this.subject);
    }

    //agregar función
}

class Libro{
    title: string;
    author: string;
    rentals: string[];
    borrowed: boolean;

    constructor(title: string, author: string, rentals: string[]){
        this.title = title;
        this.author = author;
        this.rentals = rentals;
        this.borrowed = false;
    }

    showData(): void{
        console.log("Titulo: ", this.title);
        console.log("Autor: ", this.author);
        console.log("Prestamos: ");

        //imprimir los prestamos mediante un for

        for(let i=0; i<this.rentals.length; i++){
            console.log(this.rentals[i]);
        }

        if(this.borrowed == true){
            console.log("Prestado a ", this.rentals[this.rentals.length-1]);
        }
    }
}