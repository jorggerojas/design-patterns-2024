interface Handler{
    setNext(handler: Handler): Handler;
    handle(request: string): string | null;
}

abstract class AbstractHandler implements Handler{
    private nextHandler: Handler | null = null;

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;

        return handler;
    }
    handle(request: string): string | null {
        if(this.nextHandler){
            return this.nextHandler.handle(request);
        }

        return null;
    }
    
}

class SquirreHandler extends AbstractHandler{

    public handle (request: string): string |null{
        if(request === 'Nut'){
            return `La ardilla se comerá la ${request}`;
        }

        return super.handle(request)
    }
}

class MonkeyHandler extends AbstractHandler{

    public handle (request: string): string |null{
        if(request === 'Banana'){
            return `La ardilla se comerá la ${request}`;
        }

        return super.handle(request)
    }
}

class DogHandler extends AbstractHandler{

    public handle (request: string): string |null{
        if(request === 'MeatBall'){
            return `La ardilla se comerá la ${request}`;
        }

        return super.handle(request)
    }
}

function client(handler: Handler){
    const foods = ['Nut', 'Banana', 'Cereal'];

    for (let food of foods){
        console.log(`Cliente quiere ${food}`);

        const result = handler.handle(food);

        if(result){
            console.log(result);
            return;
        }

        console.log(`La comida ${food} no fue tocada`);
        return;
    }
}

const monkey = new MonkeyHandler();
const dog = new DogHandler();
const squirrel = new SquirreHandler();

monkey
    .setNext(squirrel)
    .setNext(dog)

console.log('Cadeina: Monkey > Squirrel >Dog > End');

client(monkey);