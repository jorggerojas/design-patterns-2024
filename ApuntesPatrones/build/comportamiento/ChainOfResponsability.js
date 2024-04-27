"use strict";
class AbstractHandler {
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
class SquirelHandler extends AbstractHandler {
    handle(request) {
        if (request == 'Nut') {
            return ` La ardilla se comio una ${request}`;
        }
        return super.handle(request);
    }
}
class MonkeyHandler extends AbstractHandler {
    handle(request) {
        if (request == 'Banana') {
            return ` El mono se comio una ${request}`;
        }
        return super.handle(request);
    }
}
class DoglHandler extends AbstractHandler {
    handle(request) {
        if (request == 'Niño') {
            return `El perro se comio un ${request}`;
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
        }
        else {
            console.log(`La comida ${food} no fue tocada`);
        }
    }
}
const monkey = new MonkeyHandler();
const dog = new DoglHandler();
const sqirrel = new SquirelHandler();
monkey
    .setNext(sqirrel)
    .setNext(dog);
console.log(`Caden: monkey -> squirrel -> Dog > End`);
client(monkey);
