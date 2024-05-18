interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: string): string | null;
}

abstract class AbstractHandler implements Handler {
    private nextHandler: Handler | undefined;

    constructor(){
        this.nextHandler = undefined;
    }

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;

        return this.nextHandler;
    }

    handle(request: string): string | null {
        if (this.nextHandler) {
        return this.nextHandler.handle(request);
        }

        return null;
    }

}

class SquirrelHandler extends AbstractHandler {
    public handle(request: string): string | null {
        if (request === 'Nut') {
        return `La Ardilla se comerá la ${request}`;
        }

        return super.handle(request)
    }
}

class MonkeyHandler extends AbstractHandler {
    public handle(request: string): string | null {
        if (request === 'Banana') {
        return `El Mono se comerá la ${request}`;
        }

        return super.handle(request);
    }
}

class DogHandler extends AbstractHandler {
    public handle(request: string): string | null {
        if (request === 'MeatBall') {
        return `El perro se comerá la ${request}`;
        }

        return super.handle(request);
    }
}

function client(handler: Handler) {
    const foods = ['Nut', 'Banana', 'Cereal', 'MeatBall'];

    for (let food of foods) {
        console.log(`Cliente quiere ${food}`);

        const result = handler.handle(food);

        if(result) {
        console.log(result);
        }
        if(!result) {
        console.log(`La comida ${food} no fue tocada`);
        }
    }
}

const monkey = new MonkeyHandler();
const dog = new DogHandler();
const squirrel = new SquirrelHandler();

monkey
.setNext(squirrel)
.setNext(dog);

console.log('Cadena: Monkey > Squirrel > Dog > End');

client(monkey);