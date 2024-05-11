interface Motor {
    encender(): void;
}

class MotorGasolina implements Motor {
    encender(): void {
        console.log("Encendiendo motor de gasolina...");
    }
}

class MotorElectrico implements Motor {
    encender(): void {
        console.log("Encendiendo motor eléctrico...");
    }
}

class Coche {
    private motor: Motor;

    constructor(motor: Motor) {
        this.motor = motor;
    }

    arrancar(): void {
        this.motor.encender();
        console.log("El coche está arrancando...");
    }
}

const motorGasolina = new MotorGasolina();
const cocheGasolina = new Coche(motorGasolina);
cocheGasolina.arrancar();

const motorElectrico = new MotorElectrico();
const cocheElectrico = new Coche(motorElectrico);
cocheElectrico.arrancar();
