interface TransportStrategy{
    selectTransport(): void;
}

class Bus implements TransportStrategy{
    selectTransport(): void{
        console.log('Bus');
    }
}

class Bike implements TransportStrategy{
    selectTransport() : void{
        console.log('Bike');
    }
}

class Car implements TransportStrategy{
    selectTransport() : void {
        console.log('Car');
    }
}

class TransportContext {
    TransportStrategy: TransportStrategy;

    constructor(strategy : TransportStrategy){
        this.TransportStrategy = strategy;
    }

    chooseTransport() : void{
        this.TransportStrategy.selectTransport();
    }
}

class TransportMain{
    static transportSelected : TransportStrategy;

    static main(mode : string) : void {
        const modes : { [key : string] : TransportStrategy } = {
            'bus' : new Bus(),
            'bike' : new Bike(),
            'car' : new Car()
        };

        TransportMain.selectTransport(modes[mode]);
    }

    static selectTransport(strategyMode : TransportStrategy){
        this.transportSelected = strategyMode;

        const transportContext = new TransportContext( strategyMode );

        transportContext.chooseTransport();
    }
    static createRoute(a : string , b : string){
        const transport = this.transportSelected;

        
    }
}

TransportMain.main('bus');
TransportMain.createRoute('Queretaro', 'CDMX');