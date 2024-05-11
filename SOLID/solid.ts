// S de Principio de Responsabilidad Única (SRP) 
class FileHandler {
    saveToFile(fileName: string): void {
        console.log(`Guardando archivo en el sistema de archivos: ${fileName}`);
    }

    readFromFile(fileName: string): string {
        console.log(`Leyendo datos de ${fileName}`);
        return "El archivo no tiene nada dentro :d";
    }
}



// O de Principio de Abierto/Cerrado (OCP)
interface Shape {
    calculateArea(): number;
}

class Circle implements Shape {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

class Square implements Shape {
    side: number;

    constructor(side: number) {
        this.side = side;
    }

    calculateArea(): number {
        return this.side ** 2;
    }
}

// S de Principio de Sustitución de Liskov (LSP)
abstract class Bird {
    abstract fly(): void;
    abstract eat(): void;
}

class Sparrow extends Bird {
    fly(): void {
        console.log("El gorrión está volando.");
    }

    eat(): void {
        console.log("El gorrión está comiendo.");
    }
}

class Ostrich extends Bird {
    fly(): void {
        throw new Error("Los avestruces no pueden volar.");
    }

    eat(): void {
        console.log("El avestruz está comiendo.");
    }
}

// I de Principio de Segregación de la Interfaz (ISP)

interface Workable {
    work(): void;
}

interface Eatable {
    eat(): void;
}

class Engineer implements Workable {
    work(): void {
        console.log("El ingeniero está trabajando.");
    }
}

class Chef implements Workable, Eatable {
    work(): void {
        console.log("El chef está trabajando.");
    }

    eat(): void {
        console.log("El chef está comiendo.");
    }
}



// D de Principio de Inversión de Dependencia (DIP)
interface MessageSender {
    send(message: string): void;
}

class EmailSender implements MessageSender {
    send(message: string): void {
        console.log(`Enviando correo electrónico: ${message}`);
    }
}

class SMSsender implements MessageSender {
    send(message: string): void {
        console.log(`Enviando mensaje de texto (SMS): ${message}`);
    }
}

// Representamos por consola todos los principios SOLID
console.log("\nS de Principio de Responsabilidad Única (SRP)");
const fileHandler = new FileHandler();
fileHandler.saveToFile("archivo.txt");
fileHandler.readFromFile("archivo.txt");

console.log("\nO de Principio de Abierto/Cerrado (OCP)");
const circle = new Circle(5);
console.log("Área del círculo:", circle.calculateArea());
const square = new Square(4);
console.log("Área del cuadrado:", square.calculateArea());

console.log("\nL de Principio de Sustitución de Liskov (LSP)");
const sparrow = new Sparrow();
sparrow.fly();
sparrow.eat();
const ostrich = new Ostrich();
ostrich.eat();

console.log("\nI de Principio de Segregación de la Interfaz (ISP)");
const engineer = new Engineer();
engineer.work();
const chef = new Chef();
chef.work();
chef.eat();

console.log("\nD de Principio de Inversión de Dependencia (DIP)");
const emailSender = new EmailSender();
emailSender.send("¡Hola desde el correo electrónico!");
const smsSender = new SMSsender();
smsSender.send("¡Hola desde el mensaje de texto SMS!");
console.log("\n")
