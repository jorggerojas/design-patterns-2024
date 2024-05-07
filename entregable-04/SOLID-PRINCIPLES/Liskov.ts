/*L-LISKOV SUBSTITUTION
 * Significa que las subclases deben ser intercambiables con su clase padre sin afectar de manera negativa al programa
 */

class Person {
    name: string
    age: number
    height: number
    walksDay(distance: number, time: number) {
        //una persona camina cierta distancia
    }
}

class Adult  extends Person{
    name: string
    age: number
    height: number
    walksDay(distance: number, time: number) {
        //una persona camina cierta distancia
    }

    works(){
        //un adulto trabaja
    }
}

class Kid extends Person {
    name: string
    age: number
    height: number
    walksDay(distance: number, time: number): void {
        //un niño tambien camina cierta distancia
    }

    attendsSchool() {
        //un niño va a la escuela
    }
}

//prueba de Liskov

function stepsWalk(person: Person) {
    //cuanto camina una persona
}

const father = new Adult;
const child = new Kid;

stepsWalk(father); 
stepsWalk(child);