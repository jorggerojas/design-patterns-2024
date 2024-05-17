// La interfaz Implementation declara métodos comunes para todas las implementaciones concretas.
interface Implementation {
    operationImplementation(): string;
}

// La clase Abstraction define la interfaz de control que enlaza con la implementación.
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

// Puedes extender la clase Abstraction sin cambiar las implementaciones.
class ExtendedAbstraction extends Abstraction {
    public operation(): string {
        const result = this.implementation.operationImplementation();
        return `Extended Abstraction: ${result}`;
    }
}

// Cada implementación concreta sigue la interfaz Implementation y proporciona su propia versión de los métodos.
class ConcreteImplementationA implements Implementation {
    operationImplementation(): string {
        return 'ConcreteImplementationA: este es el resultado de la plataforma A.';
    }
}

class ConcreteImplementationB implements Implementation {
    operationImplementation(): string {
        return 'ConcreteImplementationB: este es el resultado de la plataforma B.';
    }
}

// El código del cliente trabaja con objetos de la clase Abstraction.
function clientCodeBridge(abstraction: Abstraction) {
    console.log(abstraction.operation());
}

// Uso de la implementación A
const implementationA = new ConcreteImplementationA();
const abstractionA = new Abstraction(implementationA);
clientCodeBridge(abstractionA);

// Uso de la implementación B con ExtendedAbstraction
const implementationB = new ConcreteImplementationB();
const abstractionB = new ExtendedAbstraction(implementationB);
clientCodeBridge(abstractionB);
