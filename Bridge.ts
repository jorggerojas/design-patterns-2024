interface Implementation{
    operationImplementation(): string;
}

class Abstraction{
    protected implementation: Implementation;

    constructor(implementation: Implementation){
        this.implementation = implementation;
    }

    operation(): string{
        const result = this.implementation.operationImplementation();

        return `Base Abstraction: ${result}`;
    }
}

class ExtendedAbstraction extends Abstraction{

    public operation(): string{
        const result = this.implementation.operationImplementation();
        
        return `ExtendedAbstraction: ${result}`;
    }
}

class ConcrateImplementationA implements Implementation{
    operationImplementation(): string {
        return `ConcreateImplementationA: este es el resultado de la plataforma A.`;
    }
}

class ConcrateImplementationB implements Implementation{
    operationImplementation(): string {
        return `ConcreateImplementationB: este es el resultado de la plataforma B.`;
    }
}

function clientCode(abstraction: Abstraction){
    console.log(abstraction.operation());
}

const implementationB = new ConcrateImplementationB();
const abstractionB = new ExtendedAbstraction(implementationB);
clientCode(abstractionB);