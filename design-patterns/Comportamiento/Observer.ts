interface Observer{
    update(): void;
}

interface Observable{
    attach(observer: Observer): void;
    dettach(observer: Observer): void;
    notify(): void;
}

class Twitch implements Observable{
    private subscribers: Observer[] = [];

    attach(observer: Observer): void {
        this.subscribers.push(observer);
    }
    dettach(observer: Observer): void {
        
    }
    notify(): void {
        for(let subscriber of this.subscribers){
            subscriber.update();
        }
    }
}

class Subscriber implements Observer{
    private observable;

    constructor(observable: Observable){
        this.observable = observable;
    }

    update(): void{
        console.log("Notificacion recibida");
        console.log(this.observable);
    }
}

const twitch = new Twitch();

const s1 = new Subscriber(twitch);
const s2 = new Subscriber(twitch);
const s3 = new Subscriber(twitch);

twitch.attach(s1);
twitch.attach(s2);
twitch.attach(s3);