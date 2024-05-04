"use strict";
class Bus {
    selectTransport() {
        throw new Error("Method not implemented.");
    }
}
class Bike {
    selectTransport() {
        throw new Error("Method not implemented.");
    }
}
class Car {
    selectTransport() {
        throw new Error("Method not implemented.");
    }
}
class TransportContext {
    constructor(strategy) {
        this.transportStrategy = strategy;
    }
    chooseTransport() {
        this.transportStrategy.selectTransport();
    }
}
class TransportMain {
    static main(mode) {
        const modes = {
            'bus': new Bus(),
            'bike': new Bike(),
            'car': new Car(),
        };
        const modeSelected = modes[mode];
        TransportMain.selectTransport(modes[mode]);
    }
    static selectTransport(strategyMode) {
        this.transportSelected = strategyMode;
        const transportContext = new TransportContext(strategyMode);
        transportContext.chooseTransport;
    }
    static createRoute(a, b) {
        const transport = this.transportSelected;
    }
}
TransportMain.main('bus');
TransportMain.createRoute('QRO', 'CDMX');
