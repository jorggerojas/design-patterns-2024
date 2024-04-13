interface TransportStrategy {
    selectTransport(): void;
}

class Bus implements TransportStrategy{
    selectTransport(): void {
        throw new Error("Method not implemented.");
    }
}

class Bike implements TransportStrategy{
    selectTransport(): void {
        throw new Error("Method not implemented.");
    }
}

class Car implements TransportStrategy{
    selectTransport(): void {
        throw new Error("Method not implemented.");
    }
}

class TransportContext{
    trasportStrategy: TransportStrategy;

    constructor(strategy: TransportStrategy){
        this.trasportStrategy = strategy;
    }

    chooseTransport(): void{
        this.trasportStrategy.selectTransport();
    }
}

class TransportMain{

    static transportSelected: TransportStrategy;

    static main(mode: string): void{
        const modes: {[key: string]: TransportStrategy} =  {
            'bus': new Bus(),
            'bike': new Bike(),
            'car': new Car(),
        }
        const modeSelected = modes[mode];

        TransportMain.selectedTransport(modes[mode]);
    }

    static selectedTransport(strategyMode: TransportStrategy){
        this.transportSelected = strategyMode;
        const transportContext = new TransportContext(strategyMode);
        transportContext.chooseTransport();
    }

    static createRoute(a: string, b: string){
        const transport = this.transportSelected;

        //Calcular el destino con el transporte seleccionado
    }
}

TransportMain.main('bus');
TransportMain.createRoute('QRO','CDMX');