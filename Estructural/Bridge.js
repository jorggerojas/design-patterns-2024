"use strict";
class Abstraction {
    constructor(implementation) {
        this.implementation = implementation;
    }
    operation() {
        const result = this.implementation.operationImplemantation();
        return `Base Abstraction: ${result}`;
    }
}
class ExtendedAbstraction extends Abstraction {
    operation() {
        const result = this.implementation.operationImplemantation();
        return `ExtendedAbstraction: ${result}`;
    }
}
class ConcreteImplementationA {
    operationImplemantation() {
        return 'ConcrateImplementationA: este es el resultado de la plataforma A.';
    }
}
class ConcreteImplementationB {
    operationImplemantation() {
        return 'ConcrateImplementationB: este es el resultado de la plataforma B.';
    }
}
function clientCodes(abstraction) {
    console.log(abstraction.operation());
}
const implementation = new ConcreteImplementationA();
const abstraction = new Abstraction(implementation);
clientCodes(abstraction);
const implementationB = new ConcreteImplementationB();
const abstractionB = new ExtendedAbstraction(implementationB);
clientCodes(abstractionB);
