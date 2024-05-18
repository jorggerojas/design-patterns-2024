interface Implementation{
    //definirá el color
    operatinImplementation():string

}

class Abstraction {
    //decimos que es una figura
    protected implemention: Implementation

    constructor(implementation: Implementation){
        this.implemention = implementation
    }

    operation(): string{
        const result = this.implemention.operatinImplementation()

        return `ExtendedAbstraction: ${result}`
    }
}

class ExtendedAbstraction extends Abstraction{
    //no sabo
    public operation(): string {
       const result = this.implemention.operatinImplementation()
       
       return `ExtendedAbstraction: ${result}`
    }
}

class ConcrateImplementationA implements Implementation{
    //sera la figura A y elegirá un color
    operatinImplementation(): string {
        return 'ConcrateImplementationA: este es el resultado de la plataforma A.'
    }
}

class ConcrateImplementationB implements Implementation{
    //sera la figura B y elegirá un color
    operatinImplementation(): string {
        return 'ConcrateImplementationB: este es el resultado de la plataforma B.'
    }
}

function clientCode(abstraction: Abstraction){
    console.log(abstraction.operation())
}

const implementation = new ConcrateImplementationA()
const abstraction = new Abstraction(implementation)
clientCode(abstraction)

const implementationB = new ConcrateImplementationB()
const abstractionB = new Abstraction(implementationB)
clientCode(abstractionB)