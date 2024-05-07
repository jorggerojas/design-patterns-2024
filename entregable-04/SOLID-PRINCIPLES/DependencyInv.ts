/*D-DEPENDENCY INVERSION
 * Modulos de alto nivel no deben depender de los de bajo nivel sino que en abstracciones para permitir el desacoplamiento de dependencias
 */

interface switchState { //interface que define el comportamiento
    turnOn(): void, 
    turnOff(): void,
}

class Computer implements switchState { //depende de la abstracción de comportamiento
    turnOn(): void {
        console.log('System is on')
    }
    turnOff(): void {
        console.log('System is off')
    }

}

class Button { //deodende de la interface de comportamiento
    private device: switchState;

    constructor(device: switchState) {
        this.device = device;
    }

    operatePush() {
        this.device.turnOn();
    }
}