interface Observer {
    update(): void;
}

interface Observable {
    attach(observer: Observer): void; // crear subscripcion
    detach(observer: Observer): void;//eliminar subscripcion
    notify(): void;
}

class Twitch implements Observable {
    private subscribers: Observer[] = [];

    attach(observer: Observer): void {
        this.subscribers.push(observer);
    }

    //Este se queda de tarea
    detach(observer: Observer): void {
        const index = this.subscribers.indexOf(observer);
        if (index !== -1) {
            this.subscribers.splice(index, 1);
        }
    }
    notify(): void {
        for(let subscriber of this.subscribers) {
            subscriber.update();
        }
    }
}

class Subcriber implements Observer {
    private observable;

    constructor(observable: Observable){
        this.observable = observable;
    }
    update(): void {
        console.log('Notificacion recivida')
        console.log(this.observable)
    }
}

const twitch = new Twitch();

const s1 = new Subcriber(twitch);
const s2 = new Subcriber(twitch);
const s3 = new Subcriber(twitch);

twitch.attach(s1);
twitch.attach(s2);
twitch.attach(s3);

twitch.notify();