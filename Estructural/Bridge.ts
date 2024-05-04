interface Implementation{
    operationImplemantation():string
}

class Abstraction{
    protected implementation: Implementation;

    constructor(implementation : Implementation){
        this.implementation = implementation;
    }

    operation(): string{
        const result = this.implementation.operationImplemantation();

        return `Base Abstraction: ${result}`;
    }
}

class ExtendedAbstraction extends Abstraction{
    public operation(): string {
        const result = this.implementation.operationImplemantation();

        return `ExtendedAbstraction: ${result}`;
    }
}

class ConcreteImplementationA implements Implementation{
    operationImplemantation(): string {
        return 'ConcrateImplementationA: este es el resultado de la plataforma A.'
    }
}

class ConcreteImplementationB implements Implementation{
    operationImplemantation(): string {
        return 'ConcrateImplementationB: este es el resultado de la plataforma B.'
    }
}

function clientCodes(abstraction:Abstraction){
    console.log(abstraction.operation());
}

const implementation = new ConcreteImplementationA();
const abstraction = new Abstraction(implementation);
clientCodes(abstraction);

const implementationB = new ConcreteImplementationB();
const abstractionB = new ExtendedAbstraction(implementationB);
clientCodes(abstractionB);