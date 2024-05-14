class User {
    constructor(name){
        this.name = name;
    }

    greet(){
        console.log(`Hola, soy ${this.name}`);
    }
}

class UserFactory {
    static create(name){
        return new User(name);
    }
}

const factory = new UserFactory();
const user1 = factory.create('Juan');
const user2 = factory.create('Pedro');

user1.greet();
user2.greet();