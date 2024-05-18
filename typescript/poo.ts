class Animal {
    protected edad: number;

    constructor(edad: number) {
        this.edad = edad
    }

    envejecer() {
        this.edad += 1;
    }

    comer(text:string) {
        console.log("El animal está comiendo " + text);
    }
}

const animal = new Animal(10);
animal.envejecer();
animal.comer("fruta");

console.log(animal);