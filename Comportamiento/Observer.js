"use strict";
class Twitch {
    constructor() {
        this.subscribers = [];
    }
    attach(observer) {
        this.subscribers.push(observer);
    }
    detach(observer) {
        const index = this.subscribers.indexOf(observer);
        if (index !== -1) {
            this.subscribers.splice(index, 1);
        }
    }
    notify() {
        for (let subscriber of this.subscribers) {
            subscriber.update();
        }
    }
}
class Subscriber {
    constructor(observable) {
        this.observable = observable;
    }
    update() {
        console.log('Notificacion Recibida');
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
twitch.detach(s2);
twitch.notify();
