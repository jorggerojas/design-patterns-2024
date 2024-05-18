// Esta clase tiene una única responsabilidad: representar a un perro y permitirle ladrar
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
  
  