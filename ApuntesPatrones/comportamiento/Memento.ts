interface Memento {
    getState(): string;
    getName(): string;
    getDate(): string;
}

// Objeto que conoce como guardar y restaurar sus propuos estados internos
class Originator {
    private state: string;

    constructor(state: string) {
        this.state = state;
        console.log(`Originator State: ${state}`);
    }

    doSomething(): void {
        console.log('Originator: Do something important');
        this.state = this.generateRandomString(50);
        console.log(`Originator State changed: ${this.state}`);
    }
    
    private generateRandomString(length: number = 10): string {
        const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

        const randomString = 
        //@ts-ignore
        Array.apply(null, { length })
            .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
            .join('');

        return randomString;
    }

    public save(): Memento {
        return new ConcreateMemento(this.state);
    }

    public restore(memento: Memento): void {
        this.state = memento.getState();
        console.log(`Originator State restored: ${this.state}`);
    }
}

//Almacena el estado del originator, protege la integridad de encapsulacion del originator
class ConcreateMemento implements Memento {

    private state: string;
    private date: string;

    constructor(state: string) {
        this.state = state;
        this.date = new Date().toISOString();
    }
    
    getState(): string {
        return this.state;
    }

    getName(): string {
        return `${this.date} / (${this.state.slice(0, 5)}...)`;
    }

    getDate(): string {
        return this.date;
    }
}

//Sabe como guardar y restaurar los mementos
class Caretaker {
    private mementos: Memento[] = [];
    private originator: Originator;

    constructor(originator: Originator) {
        this.originator = originator;
    }

    backup(): void {
        console.log('Caretaker: Saving Originator state...');
        this.mementos.push(this.originator.save());
    }

    undo(): void {
        if (!this.mementos.length) {
            return;
        }
        const memento = this.mementos.pop();
        if (!memento) {
            return;
        }
        console.log(`Caretaker: Restoring state to: ${memento.getName()}`);
        this.originator.restore(memento);
    }

    showHistory(): void {
        console.log('Caretaker: Here\'s the list of mementos:')
        for (const memento of this.mementos) {
            console.log(memento.getName());
        }
    }

}

// Client code 

const originator = new Originator('Super-state-initial-super-turbo');
const caretaker = new Caretaker(originator);

caretaker.backup();
originator.doSomething();

caretaker.backup();
originator.doSomething();

caretaker.backup();
originator.doSomething();

caretaker.backup();
originator.doSomething();

console.log('\n ');

caretaker.showHistory();

caretaker.undo();
caretaker.undo();
caretaker.undo();

caretaker.showHistory();


