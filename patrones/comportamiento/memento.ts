//comportamiento/memento.ts
interface Memento {
    getState(): string
    getName(): string
    getDate(): string
}

class Originator{
    private state: string

    constructor (state: string){
        this.state = state
        console.log('Original State')
    }

    doSomething(): void{
        console.log('Originator: Haciendo algo importante')
        this.state = this.generateRandomString(50)
        console.log('Gringinaror: el state cambió')
    }

    private generateRandomString(length: number = 10): string {
        const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
        const randomString = Array
            .from({ length }, () => 
                charSet.charAt(
                    Math.floor(
                        Math.random() * charSet.length
                    )
                )
            )
            .join('');
    
        return randomString;
    }
    

    public save():Memento {
        return new ConcreateMemento(this.state)
    }

    public restore(memento: Memento): void{
        this.state = memento.getState()
        console.log('Originator: el state cambio a ', this.state)
    }
}

class ConcreateMemento implements Memento{

    private state: string
    private date: string

    constructor(state: string){
        this.state = state
        this.date = new Date().toISOString()
    }

    getState(): string {
        return this.state
    }

    getName(): string {
        return `${this.date}/ (${this.state.slice(0,5)}...)`
    }

    getDate(): string {
        return this.date
    }
    
}

class CareTaker {
    private mementos: Memento[] = []
    private originator: Originator
    
    constructor( originator: Originator){
        this.originator = originator
    }

    backup(): void{
        console.log('Caretake: esta guardando el estado de Originator')
        this.mementos.push(this.originator.save())
    }   

    undo(): void{
        if (!this.mementos.length) {
            return
        }

        const memento = this.mementos.pop()
        if (!memento) {
            return
        }

        console.log('caretaker: Restaurar el state hacia', memento?.getName())
        this.originator.restore(memento)
    }

    showHistory(): void{
        console.log('Caretaker: Lista de mementos:\n')
        for (const memento of this.mementos) {
            console.log(memento.getName());
            
        }
    }
}






const originator = new Originator('super-state-initial-super-turbo')
const caretaker = new CareTaker(originator)

caretaker.backup()
originator.doSomething()

caretaker.backup()
originator.doSomething()

caretaker.backup()
originator.doSomething()

caretaker.backup()
originator.doSomething()

console.log('\n\n')
caretaker.showHistory()