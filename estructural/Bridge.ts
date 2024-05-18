interface Implementation{
    operationImplementation(): string;
}

class Abstraction{
    protected implementation: Implementation;
    constructor(implementation:Implementation){
        this.implementation= implementation;
    }
    operation(): string {
        const result=this.implementation.operationImplementation();
        return `Base Abstraction: ${result}`;
    }
}

class ExtendedAbstraction extends Abstraction{
    public operation(): string{
        const result=this.implementation.operationImplementation();
        return `ExtendedAbstraction: ${result}`;
    }
}

class ConcrateImplementationA implements Implementation{
    operationImplementation(): string {
        return 'ConcrateImplementationA: este es el recultado de la plataforma A';
    }
}

class ConcrateImplementationB implements Implementation{
    operationImplementation(): string {
        return 'ConcrateImplementationB: este es el recultado de la plataforma B';
    }
}

function clientCode(abstraction: Abstraction){
    console.log(abstraction.operation());
}

const implementation = new ConcrateImplementationA();
const abstraction= new Abstraction(implementation);
const abstractionC= new Abstraction(implementation);
const cuadradoRojo= new Abstraction(implementation);
const cuadradoNegro= new Abstraction(implementation);
clientCode(abstraction);

const ImplementationB= new ConcrateImplementationB();
const abstractionB= new ExtendedAbstraction(ImplementationB);
clientCode(abstractionB);