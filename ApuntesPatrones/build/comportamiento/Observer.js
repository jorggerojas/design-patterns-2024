"use strict";
class Twitch {
    constructor() {
        this.subscribers = [];
    }
    attach(observer) {
        this.subscribers.push(observer);
    }
    //Este se queda de tarea
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
class Subcriber {
    constructor(observable) {
        this.observable = observable;
    }
    update() {
        console.log('Notificacion recivida');
        console.log(this.observable);
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
