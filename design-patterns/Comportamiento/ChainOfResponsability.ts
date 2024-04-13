interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: string): string | null;
}

abstract class AbstractHanler implements Handler{
    private nextHandler: Handler | undefined;

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;

        return this.nextHandler;
    }

    handle(request: string): string | null {
        if(this.nextHandler){
            return this.nextHandler.handle(request);
        }

        return null;
    }


    
}

class SquireelHandler extends AbstractHanler{
    public handle(request: string): string | null {
        if(request === 'Nut'){
            return `La Ardilla se comerá la ${request}`;
        }
        return super.handle(request);    
    }
}

class MonkeyHandler extends AbstractHanler{
    public handle(request: string): string | null {
        if(request === 'Banana'){
            return `La Mono se comerá la ${request}`;
        }
        return super.handle(request);    
    }
}

class DogHandler extends AbstractHanler{
    public handle(request: string): string | null {
        if(request === 'meat'){
            return `El Perro se comerá la ${request}`;
        }
        return super.handle(request);    
    }
}

function client(handler: Handler){
    const foods = ['Nut', 'Banana', 'Cereal'];

    for(let food of foods){
        console.log(`Cliente quiere ${food}`);

        const result = handler.handle(food);

        if(result){
            console.log(result);
        }
        if(!result){
            console.log(`La comida ${food} no fue tocada`);
            return;
        }
    }
}

const monkey = new MonkeyHandler();
const dog = new DogHandler();
const squirrel = new SquireelHandler();

monkey
    .setNext(squirrel)
    .setNext(dog);
console.log(`Cadena > monkey > squirrel > dog > end`);

client(monkey);

