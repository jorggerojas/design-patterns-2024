interface Implementation {
    operationImplementation(): string;
}

class Abstraction {
    protected implementation: Implementation;

    constructor(implementation: Implementation) {
        this.implementation = implementation;
    }

    operation(): string {
        const result = this.implementation.operationImplementation();

        return `Base Abstraction: ${result}`;
    }
}

class ExtendedAbstraction extends Abstraction {
    
    public operation(): string {
        const result = this.implementation.operationImplementation();

        return `ExtendedAbstraction: ${result}`;
    }
}

class ConcreateImplementationA implements Implementation {
    operationImplementation(): string {
        return 'ConcreateImplementationA: Este es el resultado de la plataforma A';
    }
}

class ConcreateImplementationB implements Implementation {
    operationImplementation(): string {
        return 'ConcreateImplementationB: Este es el resultado de la plataforma B';
    }
}

function clientCode(abstraction: Abstraction) {
    console.log(abstraction.operation());
}

const implementation = new ConcreateImplementationA();
const abstraction = new Abstraction(implementation);
clientCode(abstraction);

const implementationB = new ConcreateImplementationB();
const abstractionB = new Abstraction(implementationB);
clientCode(abstractionB);