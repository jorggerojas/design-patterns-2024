interface TransportStrategy {
    selectTransport(): void;
}
  
class Bus implements TransportStrategy {
    selectTransport(): void {
        console.log("Transportandosse por camión");
    }
}

class Bike implements TransportStrategy {
    selectTransport(): void {
        console.log("Transportandosse por bicicleta");
    }
}

class Car implements TransportStrategy {
    selectTransport(): void {
        console.log("Transportandosse por carro");
    }
}

class TransportContext {
    transportStrategy: TransportStrategy;

    constructor(strategy: TransportStrategy){
        this.transportStrategy = strategy;
    }

    chooseTransport(): void {
        this.transportStrategy.selectTransport();
    }
}

class TransportMain {

    static trasportSelected: TransportStrategy;

    static main(mode: string): void {
        const modes: { [key: string]: TransportStrategy } = {
        'bus': new Bus(),
        'bike': new Bike(),
        'car': new Car(),
        };

        const modeSelected = modes[mode];

        TransportMain.selectTransport(modeSelected);
    }

    static selectTransport(strategyMode: TransportStrategy) {
        this.trasportSelected = strategyMode;
        const transportContext = new TransportContext(strategyMode);
        transportContext.chooseTransport();
    }

    static createRoute(a: string, b: string){
        const transport = this.trasportSelected;

        console.log('Ruta desde '+ a + ' hasta ' + b)
    }

}

TransportMain.main('bus');
TransportMain.createRoute('QRO', 'CDMX');