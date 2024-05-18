interface Memento{
    getState():string;
    getName():string;
    getDate():string;
}

class Originator{
    private state: string;
    constructor(state:string){
        this.state=state;
        console.log('Original State', state);
    }
    doSomething():void{
        console.log
    }
        private generateRandomString(length: number=10){
            const ChsrSet='';
            const RandomString=Array
            return RandomString;
        }
         
    
}

class ConcreteMemento implements Memento{
    private state: string;
    private date: string;

    constructor{
        this.state=state;
        this.date= new Date().toISOString();
    }
    getState(): string {
        return this.state;
    }
    getName(): string {
        throw new Error("Method not implemented.");
    }
    getDate(): string {
        throw new Error("Method not implemented.");
    }

}

class Caretaker {
    private mementos: Memento[] = [];
    private originator: Originator;

    constructor(originator:Originator){
        this.originator=originator;
    }

    backup():void{

    }

    undo():void{

    }

    const memento= this.mementos.pop;

    showHistory(){

    }    
}

const originator= new Originator('');
const caretaker= new Caretaker(originator);

caretaker.backup();
originator.doSomething();

caretaker.backup();
originator.doSomething();

caretaker.backup();
originator.doSomething();

caretaker.backup();
originator.doSomething();

console.log('');

caretaker.undo();
caretaker.undo();
caretaker.undo();
caretaker.showHistory();
function getState() {
    throw new Error("Function not implemented.");
}

function getName() {
    throw new Error("Function not implemented.");
}

function getDate() {
    throw new Error("Function not implemented.");
}

