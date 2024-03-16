// Clase
class Animal {
  protected edad: number;

  constructor(edad: number) {
    this.edad = edad;
  }

  envejecer() {
    this.edad += 1;
  }

  comer(text: string) {
    console.log("el animal está comiendo:" + text);
  }
}

// Instancia de una clase
const animal = new Animal(10);

// ejecutar un método
animal.envejecer();

// ejecutar otro método con parámetro
animal.comer("fruta");

// crear otra instancia de la misma clase sin afectar a la primera
const animal2 = new Animal(5);

console.log(animal2); // Animal { edad:5 }

/******Herencia*****/
class Persona {
  protected edad: number;
  protected nombre: string;

  // constructor con un objeto como parámetro
  constructor(param: { edad: number; nombre: string }) {
    this.edad = param.edad;
    this.nombre = param.nombre;
  }

  comer() {
    console.log(`${this.nombre} está comiendo`);
  }
}

// Instancia de una clase
const persona = new Persona({
  nombre: "Jorge",
  edad: 25,
});

// ejecutar un método
persona.comer(); // Jorge está comiendo

// Herencia de la clase Persona en la clase Adulto
class Adulto extends Persona {
  constructor(nombre: string) {
    // Llamar al constructor de la clase padre
    super({ nombre: nombre, edad: 18 });
  }

  // Método propio de la clase Adulto que no existe en la clase Persona
  votar() {
    console.log("Votando");
  }
}

// Instancia de una clase, edad 18 estática
const adulto = new Adulto("Marco");

adulto.comer(); // Marco está comiendo
adulto.votar(); // Votando

// Herencia de la clase Persona en la clase Infante
class Infante extends Persona {
  // Propiedad propia de la clase Infante que no existe en la clase Persona
  protected colorFavo: string;

  // constructor con parámetros, edad y color además de los parámetros de la clase Persona
  constructor(edad: number, colorParametro: string) {
    super({
      nombre: "luis",
      edad: edad,
    });
    // Infante.colorFavo
    this.colorFavo = colorParametro; // rojo
  }

  comerTierra() {
    console.log("el niñx come tierra");
  }
}

const infante = new Infante(3, "azul");
const infante2 = new Infante(2, "rojo");

infante.comer(); // luis está comiendo
infante.comerTierra(); // el niñx come tierra

console.log(infante); // Infante {nombre: "luis", edad: 3, colorFavo: "azul"}

/*******Abstracción y polimorfismo*******/

// Interfaz que define un método
interface Vehiculo {
  encender: () => void;
}

// Clase que implementa la interfaz Vehiculo
class Auto implements Vehiculo {
  constructor() {
    console.log("Auto creado");
  }

  // Método de la interfaz Vehiculo, implementado en la clase Auto
  // nos dice qué ejecutar pero no cómo
  encender() {
    console.log("Encendiendo auto");
  }
}

class Moto implements Vehiculo {
  protected array: number[];
  constructor(arrayParam: number[]) {
    console.log("Moto creada");
    this.array = arrayParam;
  }

  // Método de la interfaz Vehiculo, implementado en la clase Moto
  // nos dice qué ejecutar pero no cómo
  // diferente implementación que la clase Auto, pero el mismo método
  encender() {
    const array = [1, 2, 3, 4, 5];
    this.array = array;
  }
}
