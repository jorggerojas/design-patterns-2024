interface Dog {
    bark(): void;
  }
  
  interface GuardDog {
    guard(): void;
  }
  
  class BasicDog implements Dog {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    bark() {
      console.log(`${this.name} hace woof!`);
    }
  }
  
  class SecurityDog implements Dog, GuardDog {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    bark() {
      console.log(`${this.name} hace woof!`);
    }
  
    guard() {
      console.log(`${this.name} esta vigilando.`);
    }
  }
  