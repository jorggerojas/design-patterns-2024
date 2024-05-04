"use strict";
class AbstracHandler {
    constructor() {
        this.nextHandler = undefined;
    }
    setNext(handler) {
        this.nextHandler = handler;
        return this.nextHandler;
    }
    handle(request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    }
}
class SquirrelHandler extends AbstracHandler {
    handle(request) {
        if (request === 'Nut') {
            return `La Ardilla se comera la ${request}`;
        }
        return super.handle(request);
    }
}
class MonkeyHandler extends AbstracHandler {
    handle(request) {
        if (request === 'Banana') {
            return `El Mono se comera la ${request}`;
        }
        return super.handle(request);
    }
}
class DogHandler extends AbstracHandler {
    handle(request) {
        if (request === 'MeatBall') {
            return `El Perro se comera la ${request}`;
        }
        return super.handle(request);
    }
}
function client(handler) {
    const foods = ['Nut', 'Banana', 'Cereal'];
    for (let food of foods) {
        console.log(`Cliente quiere ${food}`);
        const result = handler.handle(food);
        if (result) {
            console.log(result);
            return;
        }
        console.log(`La comida ${food} no fue tocada`);
        return;
    }
}
const squirrel = new SquirrelHandler();
const monkey = new MonkeyHandler();
const dog = new DogHandler();
monkey.setNext(squirrel).setNext(dog);
console.log('Cadena Monkey > Squirrel > Dog > End');
client(monkey);
