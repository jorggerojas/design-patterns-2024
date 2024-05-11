interface handler{
    setNext(handler : handler) : handler;
    handle(request : string) : string | null;
}

abstract class AbstractHandler implements handler{
    private nextHandler : handler | undefined;

    setNext(handler : handler) : handler{
        this.nextHandler = handler;
        return this.nextHandler;
    }

    handle(request : string) : string | null{
        if(this.nextHandler){
            return this.nextHandler.handle(request);
        }
        return null;
    }
}

class squirrelHandler extends AbstractHandler{
    public handle(request : string) : string | null{
        if(request === 'Nut'){
            return `Squirrel: I'll eat the ${request}`;
        }
    
        return super.handle(request);
    }
}


class MonkeyHandler extends AbstractHandler{
    public handle(request : string) : string | null{
        if(request === 'Banana'){
            return `Monkey: I'll eat the ${request}`;
        }
    
        return super.handle(request);
    }
}

class DogHandler extends AbstractHandler{
    public handle(request : string) : string | null{
        if(request === 'MeatBall'){
            return `Dog: I'll eat the ${request}`;
        }
    
        return super.handle(request);
    }
}

function client(handler : handler){
    const foods = ['Nut', 'Banana', 'Cup of coffee'];
    for(let i = 0; i < foods.length; i++) {
        console.log(`Who wants a ${foods[i]}?`);
        const result = handler.handle(foods[i]);
        if(result){
            console.log(`  ${result}`);
        }else{
            console.log(`  ${foods[i]} was left untouched`);
        }
    }
}

const monkey = new MonkeyHandler();
const squirrel = new squirrelHandler();
const dog = new DogHandler();

monkey.setNext(squirrel).setNext(dog);

console.log('Chain: Monkey -> Squirrel -> Dog');