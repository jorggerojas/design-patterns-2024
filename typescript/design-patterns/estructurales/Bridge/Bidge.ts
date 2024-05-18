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

    return `Extended Abstraction: ${result}`;
  }
}

class ConcrateImplementationA implements Implementation {
  operationImplementation(): string {
    return "ConcrateImplementationA: este es el resultado de la plataforma A.";
  }
}

class ConcrateImplementationB implements Implementation {
  operationImplementation(): string {
    return "ConcrateImplementationB: este es el resultado de la plataforma B.";
  }
}

function clientCode(abstraction: Abstraction) {
  console.log(abstraction.operation());
}

const implementation = new ConcrateImplementationA();
const abstraction = new Abstraction(implementation);
clientCode(abstraction);

const implementationB = new ConcrateImplementationB();
const abstractionB = new ExtendedAbstraction(implementationB);
clientCode(abstractionB);
