class Dog {
    name: string;
    breed: string;
  
    constructor(name: string, breed: string) {
      this.name = name;
      this.breed = breed;
    }
  
    bark() {
      console.log(`${this.name} hace woof!`);
    }
  }
  
  class GuardDog extends Dog {
    guard() {
      console.log(`${this.name} esta vigilando.`);
    }
  }
  