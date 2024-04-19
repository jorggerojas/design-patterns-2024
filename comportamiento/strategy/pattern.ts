interface TransportStrategy{

}

class Bus implements TransportStrategy{

}

class Bike implements TransportStrategy{

}

class Car implements TransportStrategy{

    static selectTransport(): void {
        throw new Error("Method not implement.");
    }

}

class TransportContext {
    transportStrategy: TransportStrategy;

    constructor(strategy: TransportStrategy){
        this.transportStrategy = strategy;
    }

    chooseTransport(): void{
        this.transportStrategy.selectTransport();
    }
}

class TransportMain {
    static transportSelected: TransportStrategy;

    static main(mode: string): void {
        const modes: { [key: string]: TransportStrategy } = {
            'bus': new Bus(),
            'bike': new Bike(),
            'car': new Car(),
        }
        new TransportMain.selectTransport( strategyMode: modes[mode] as TransportStrategy);       
    }

    static selectTransport(strategyMode: TransportStrategy){
        this.transportSelected = strategyMode;
        const transportContext = new TransportContext( strategy: strategyMode );
        transportContext.chooseTransport();
    }
}