

interface Implementation {
    operationImplementation(): string;
}

class Abstraccion {
    protected implementation: Implementation;

    constructor(implementation: Implementation){
        this.implementation = implementation;
    }

    operation(): string{
        const result = this.implementation.operationImplementation();
        return `BaseAbstraction: ${result}`
    }
}

class ExtendedAbstraction extends Abstraccion{
    public operation(): string {
        const result = this.implementation.operationImplementation();

        return `ExtendedAbstraction: ${result}`;
    }
}

class ConcrateImplementationA implements Implementation{
    operationImplementation(): string {
        return 'ConcrateImplementarionA: este es un resultado de la plataforma A.';
    }
}

class ConcrateImplementationB implements Implementation{
    operationImplementation(): string {
        return 'ConcrateImplementarionB: este es un resultado de la plataforma b.';
    }
}

function clientCode(abstraccion: Abstraccion){
    console.log(abstraccion.operation());
}

const implementationA = new ConcrateImplementationA();
const abstraccionA = new Abstraccion(implementationA);
clientCode(abstraccionA);

const implementationB = new ConcrateImplementationB();
const abstraccionB = new ExtendedAbstraction(implementationB);
clientCode(abstraccionB);