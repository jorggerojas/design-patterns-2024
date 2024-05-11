interface Implementation{
    operationImplementation() : string;
}
class Abstraccion{
    protected implementation : Implementation;

    constructor(implementation : Implementation){
        this.implementation = implementation
    }

    operation() : string{
        const result = this.implementation.operationImplementation();

        return result
    }
}

class ExtendendAbstraccion extends Abstraccion{
    public operation(): string {
        const result = this.implementation.operationImplementation();

        return `ExtendedAbstraction: ${result}`;
    }
}

class CreateImplementationA implements Implementation{
    operationImplementation(): string {
        return 'ConcreteImplementationA: Here\'s the result on the platform A.';
    }
}


class ConcreateImplementationB implements Implementation{
    operationImplementation(): string {
        return 'ConcreteImplementationB: Here\'s the result on the platform B.';
    }
}

function clientCode(abstraction: Abstraccion) {
    console.log(abstraction.operation());
}

const implementation = new CreateImplementationA();
const abstraction = new Abstraccion(implementation);
clientCode(abstraction);

const implementationB = new ConcreateImplementationB();
const abstractionB = new ExtendendAbstraccion(implementationB);
clientCode(abstractionB);