class Animal {
    constructor(private readonly nombre: string) {}

    hacerSonido(): string {
        return "Sonido de animal genérico";
    }

    obtenerNombre(): string {
        return this.nombre;
    }
}

class Perro extends Animal {
    hacerSonido(): string {
        return "Guau Guau";
    }
}

class Gato extends Animal {
    hacerSonido(): string {
        return "Miau Miau";
    }
}

class Pajaro extends Animal {
    hacerSonido(): string {
        return "Pío Pío";
    }
}

function hacerSonidoAnimal(animal: Animal): void {
    console.log(`${animal.obtenerNombre()} dice: ${animal.hacerSonido()}`);
}

const perro = new Perro("Perro");
const gato = new Gato("Gato");
const pajaro = new Pajaro("Pajaro");

hacerSonidoAnimal(perro); 
hacerSonidoAnimal(gato);  
hacerSonidoAnimal(pajaro); 
