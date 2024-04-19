interface Observer {
    update(): void;
}

interface Observable {
    attach (observer: Observer): void;
    detach (observer: Observer): void;
    notify(): void;
}

class Twitch implements Observable {

    private suscribers: Observer[] = [];

    attach(observer: Observer): void {
        this.suscribers.push(observer );
    }

    detach(observer: Observer): void {
        const index = this.suscribers.indexOf(observer);
        if (index !== -1) {
            this.suscribers.splice(index, 1);
            console.log('Observador desadjuntado correctamente.');
        } else {
            console.log('El observador no estaba adjuntado.');
        }
    }

    notify(): void {
        for(let subscriber of this.suscribers){
            subscriber.update();
        }
    }

    onLive(): void {
        console.log('Estamos en vivo');
        this.notify();
    }
}

class Suscriber implements Observer{
    private observable;

    constructor(observable: Observable){
        this.observable = observable;
    }

    update(): void {
        console.log( 'Notificacion recibida.');
        // console.log( this.observable);
    }
}

const twitch = new Twitch();

const s1 = new Suscriber( twitch);
const s2 = new Suscriber( twitch);
const s3 = new Suscriber( twitch);

twitch.attach( s1);
twitch.attach( s2);
twitch.attach( s3);

twitch.detach( s1);
// twitch.detach( s2);
// twitch.detach( s3);

twitch.onLive();