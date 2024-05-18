/* Los clientes no deberían estar forzados a depender de interfaces que no usan.
Es mejor tener varias interfaces específicas que una sola interfaz general.*/
interface Car {
    startEngine(): void;
    drive(): void;
    stopEngine(): void;
}

interface Radio {
    turnOnR(): void;
    turnOffR(): void;
    changeStationR(station: number): void;
}

class BasicCar implements Car {
    startEngine(): void {
        console.log("Motor encendido.");
    }

    drive(): void {
        console.log("Conduciendo...");
    }

    stopEngine(): void {
        console.log("Motor apagado.");
    }
}

class CarWithRadio implements Car, Radio {
    startEngine(): void {
        console.log("Motor encendido.");
    }

    drive(): void {
        console.log("Conduciendo...");
    }

    stopEngine(): void {
        console.log("Motor apagado.");
    }

    turnOnR(): void {
        console.log("Radio encendida.");
    }

    turnOffR(): void {
        console.log("Radio apagada.");
    }

    changeStationR(station: number): void {
        console.log("Cambiando a la estación", station);
    }
}
