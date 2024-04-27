"use strict";
class Abstraction {
    constructor(implementation) {
        this.implementation = implementation;
    }
    operation() {
        const result = this.implementation.operationImplementation();
        return `Base Abstraction: ${result}`;
    }
}
class ExtendedAbstraction extends Abstraction {
    operation() {
        const result = this.implementation.operationImplementation();
        return `ExtendedAbstraction: ${result}`;
    }
}
class ConcreateImplementationA {
    operationImplementation() {
        return 'ConcreateImplementationA: Este es el resultado de la plataforma A';
    }
}
class ConcreateImplementationB {
    operationImplementation() {
        return 'ConcreateImplementationB: Este es el resultado de la plataforma B';
    }
}
function clientCode(abstraction) {
    console.log(abstraction.operation());
}
const implementation = new ConcreateImplementationA();
const abstraction = new Abstraction(implementation);
clientCode(abstraction);
const implementationB = new ConcreateImplementationB();
const abstractionB = new Abstraction(implementationB);
clientCode(abstractionB);
