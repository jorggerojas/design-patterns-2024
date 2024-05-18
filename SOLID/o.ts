interface DogBehavior {
    bark(): void;
  }
  
  class Dog implements DogBehavior {
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
  
  class SilentDog implements DogBehavior {
    bark() {
      // Dog does not bark
    }
  }
  
  // Esta estructura permite extender el comportamiento de los perros sin modificar la clase Dog existente.
  