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
    return `Abstraction: Base operation with:\n${result}`;
  }
}

class extendedAbstraction extends Abstraction {
  public operation(): string {
    const result = this.implementation.operationImplementation();
    return `ExtendedAbstraction: Extended operation with:\n${result}`;
  }
}

class ConcreteImplementationA implements Implementation {
  operationImplementation(): string {
    return "ConcreteImplementationA: Here's the result on the platform A.";
  }
}

class ConcreteImplementationB implements Implementation {
  operationImplementation(): string {
    return "ConcreteImplementationB: Here's the result on the platform B.";
  }
}

function clientCode(abstraction: Abstraction) {
  console.log(abstraction.operation());
}

const implementationA = new ConcreteImplementationA();

const abstraction = new Abstraction(implementationA);

clientCode(abstraction);

const implementationB = new ConcreteImplementationB();

const AbstractionB = new extendedAbstraction(implementationB);

clientCode(AbstractionB);
