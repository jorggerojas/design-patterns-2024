interface DogSound {
    makeSound(): void;
  }
  
  class Bark implements DogSound {
    makeSound() {
      console.log("Woof!");
    }
  }
  
  class Dog {
    sound: DogSound;
  
    constructor(sound: DogSound) {
      this.sound = sound;
    }
  
    makeSound() {
      this.sound.makeSound();
    }
  }
  