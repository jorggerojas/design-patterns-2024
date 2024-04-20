interface Observer {
    update(): void;
}

interface Observable {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
    onLive(): void;
}

class Twitch implements Observable {
    private suscribers: Observer[] = [];

    attach(observer: Observer): void {
        this.suscribers.push(observer);
    }
    detach(observer: Observer): void {
        const index = this.suscribers.indexOf(observer);
        if (index == -1){
            console.log('No existe el subscriptor')
        }else{
            this.suscribers.splice(index, 1);
            console.log('Subscriptor removido')
        }
    }
    notify(): void {
        for(let suscriber of this.suscribers){
            suscriber.update();
        }
    }  
    
    onLive(): void{
        console.log('Estamos en vivo.')
        this.notify();
    }
}

class Subscriber implements Observer{
    private observable;

    constructor(observable: Observable){
        this.observable = observable;
    }

    update(): void {
        console.log('Notificación recibida.');
        console.log(this.observable);
    }
}

const twitch = new Twitch();

const s1 = new Subscriber(twitch);
const s2 = new Subscriber(twitch);
const s3 = new Subscriber(twitch);
const s4 = new Subscriber(twitch);

twitch.attach(s1);
twitch.attach(s2);
twitch.attach(s3);

twitch.notify();

twitch.detach(s2);
twitch.detach(s4);

twitch.notify();