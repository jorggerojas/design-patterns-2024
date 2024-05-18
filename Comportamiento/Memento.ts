interface Memento {
    getState(): string;
    getName(): string;
    getDate(): string;
}
  
class Originator {
    private state: string;
  
    constructor(state: string) {
      this.state = state;
      console.log('Original State', state);
    }
  
    doSomething(): void {
      console.log('Originator: Esta haciendo algo importante');
      this.state = this.generateRandomString(50)
      console.log('Originator: el state cambio', this.state);
    }
  
    private generateRandomString(length: number = 10): string {
      const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
      const randomString = Array
        // @ts-ignore
        .apply(null,{ length })
        .map(
          () => charSet.charAt(Math.floor(Math.random() * charSet.length))
        )
        .join('')
  
      return randomString;
    }
  
    public save(): Memento {
      return new ConcreteMemento(this.state);
    }
  
    public restore(memento: Memento): void {
      this.state = memento.getState();
      console.log('Originator: el state cambio a', this.state);
    }
  
}
  
class ConcreteMemento implements Memento {
  
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
  
class Caretaker {
    private mementos:Memento[] = [];
    private originator:Originator;

    constructor(originator:Originator){
        this.originator = originator;
    }

    backup():void{
        console.log('Caretake: esta guardando el estado Originator');
        this.mementos.push(this.originator.save()); 
    }

    undo():void{
        if(!this.mementos.length){
            return;
        }
        const memento = this.mementos.pop();
        if(!memento){
            return;
        }
        console.log('Caretaker: Restaurar el state hacia',memento);
        this.originator.restore(memento);
    }

    showHistory():void{
        console.log('Caretaker: lista de mementos: \n');
        for(const memento of this.mementos){
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