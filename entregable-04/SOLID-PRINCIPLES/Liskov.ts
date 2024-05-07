/*L-LISKOV SUBSTITUTION
 * Significa que las subclases deben ser intercambiables con su clase padre sin afectar de manera negativa al programa
 */

class Adult {
    name: string
    age: number
    height: number
    walksDay(distance: number, time: number) {
        //una persona camina cierta distancia
    }
}

class Kid extends Adult {
    name: string
    age: number
    height: number
    walksDay(distance: number, time: number): void {
        //un niño tambien camina cierta distancia
    }
}

const person = new Adult; 
const person2 = new Kid; // Tienen el mismo comportamiento y ambas clases se pueden sustituir entre si