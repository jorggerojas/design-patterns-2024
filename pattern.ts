interface TransportStrategy {
    selectTransport(): void;
}

class Bus implements TransportStrategy {
    selectTransport(): void{
        throw new Error("Method not implemented.")
    }
}

class Bike implements TransportStrategy{
    selectTransport(): void{
        throw new Error("Method not implemented.")
    }
}

class Car implements TransportStrategy{
    selectTransport(): void{
        throw new Error("Method not implemented.")
    }
}


class TransportContext{
    transportStrategy: TransportStrategy;

    constructor(strategy: TransportStrategy){
        this.transportStrategy = strategy;
    }

    chooseTransport(): void {
        this.transportStrategy.selectTransport();
    }
}

class TransportMain {

    static transportSelected: TransportStrategy;

    static main(mode: string): void{
        const modes = {
            'bus': new Bus(),
            'bike': new Bike(),
            'car': new Car(),
        };
        // @ts-ignore
        TransportMain.selectTransport(modes[mode]);
    }

    static selectTransport(strategyMode: TransportStrategy) {
        this.transportSelected = strategyMode;
        const transportContext = new TransportContext(strategyMode);
        transportContext.chooseTransport();
    }

    static createRoute(a: string, b: string){
        const transport = this.transportSelected
    }
}

TransportMain.main('bus');
TransportMain.createRoute('QRO','CDMX')
