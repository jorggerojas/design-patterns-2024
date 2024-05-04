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

}