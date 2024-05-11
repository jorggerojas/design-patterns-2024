interface Observer {
    update(): void;
}

interface Observable {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
}

class Twitch implements Observable {

    private suscribers: Observer[] = [];

    attach(observer: Observer): void {
        this.suscribers.push(observer);
    }

    detach(observer: Observer): void {
        this.suscribers = this.suscribers.filter(suscriber => suscriber !== observer);
    }

    notify(): void {
        for(let suscriber of this.suscribers){
            suscriber.update();
        }
    }

    onLive(): void {
        console.log("Estamos en vivo");
        this.notify();
    }
    
}

class Subscriber implements Observer {
    private observable;

    constructor(observable: Observable){
        this.observable = observable;
    }

    update(): void {
        console.log("Notificación recibida");
    }
}

const twitch = new Twitch();
const s1 = new Subscriber(twitch);
const s2 = new Subscriber(twitch);
const s3 = new Subscriber(twitch);

twitch.attach(s1);
twitch.attach(s2);
twitch.attach(s3);

twitch.onLive();
