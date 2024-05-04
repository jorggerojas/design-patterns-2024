"use strict";
class Target {
    request() {
        return 'Targe: Default Targe.';
    }
}
class Adaptee {
    specificRequest() {
        return 'sodot a aloH';
    }
}
class Adapter extends Target {
    constructor(adaptee) {
        super();
        this.adaptee = adaptee;
    }
    request() {
        const result = this.adaptee.specificRequest();
        const resultAdapted = result.split('').reverse().join('');
        return `Adapter: (Traduccion) ${resultAdapted};`;
    }
}
function clientCode(target) {
    console.log(target.request());
}
const target = new Target();
clientCode(target);
const adaptee = new Adaptee();
console.log(`Adaptee ${adaptee.specificRequest()}`);
const adapter = new Adapter(adaptee);
clientCode(adapter);
