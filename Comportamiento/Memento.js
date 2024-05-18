"use strict";
class Originator {
    constructor(state) {
        this.state = state;
        console.log('Original State', state);
    }
    doSomething() {
        console.log('Originator: Esta haciendo algo importante');
        this.state = this.generateRandomString(50);
        console.log('Originator: el state cambio', this.state);
    }
    generateRandomString(length = 10) {
        const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const randomString = Array
            // @ts-ignore
            .apply(null, { length })
            .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
            .join('');
        return randomString;
    }
    save() {
        return new ConcreteMemento(this.state);
    }
    restore(memento) {
        this.state = memento.getState();
        console.log('Originator: el state cambio a', this.state);
    }
}
class ConcreteMemento {
    constructor(state) {
        this.state = state;
        this.date = new Date().toISOString();
    }
    getState() {
        return this.state;
    }
    getName() {
        return `${this.date} / (${this.state.slice(0, 5)}...)`;
    }
    getDate() {
        return this.date;
    }
}
class Caretaker {
    constructor(originator) {
        this.mementos = [];
        this.originator = originator;
    }
    backup() {
        console.log('Caretake: esta guardando el estado Originator');
        this.mementos.push(this.originator.save());
    }
    undo() {
        if (!this.mementos.length) {
            return;
        }
        const memento = this.mementos.pop();
        if (!memento) {
            return;
        }
        console.log('Caretaker: Restaurar el state hacia', memento);
        this.originator.restore(memento);
    }
    showHistory() {
        console.log('Caretaker: lista de mementos: \n');
        for (const memento of this.mementos) {
            console.log(memento.getName());
        }
    }
}
const originator = new Originator('super-state-initial-super-turbo');
const caretaker = new Caretaker(originator);
caretaker.backup();
originator.doSomething();
caretaker.backup();
originator.doSomething();
caretaker.backup();
originator.doSomething();
caretaker.backup();
originator.doSomething();
console.log('\n');
caretaker.showHistory();
