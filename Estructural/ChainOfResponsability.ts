interface Handler{
    setNext(handler:Handler):Handler;
    handle(request:string):string|null;
}

abstract class AbstracHandler implements Handler{
    private nextHandler: Handler | undefined;

    constructor(){
        this.nextHandler = undefined;
    }

    setNext(handler: Handler): Handler {
        this.nextHandler =  handler;

        return this.nextHandler;
    }

    handle(request: string): string | null {
        if(this.nextHandler){
            return this.nextHandler.handle(request);
        }
        return null;
    }
}

class SquirrelHandler extends AbstracHandler{
    public handle(request: string): string | null {
        if (request==='Nut') {
            return `La Ardilla se comera la ${request}`
        }   
        return super.handle(request);
    }
    
}

class MonkeyHandler extends AbstracHandler{
    public handle(request: string): string | null {
        if (request==='Banana') {
            return `El Mono se comera la ${request}`
        }   
        return super.handle(request);
    }
    
}

class DogHandler extends AbstracHandler{
    public handle(request: string): string | null {
        if (request==='MeatBall') {
            return `El Perro se comera la ${request}`
        }   
        return super.handle(request);
    }
    
}

function client(handler:Handler){
    const foods = ['Nut','Banana','Cereal'];

    for(let food of foods){
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

const squirrel = new SquirrelHandler();
const monkey = new MonkeyHandler();
const dog = new DogHandler();

monkey.setNext(squirrel).setNext(dog);

console.log('Cadena Monkey > Squirrel > Dog > End');

client(monkey);

