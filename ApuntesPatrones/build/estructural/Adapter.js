"use strict";
class Target {
    request() {
        return 'Target: The default target.';
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
        this.adaptee = adaptee;
    }
    request() {
        const result = this.adaptee.specificRequest();
        const resultAdapter = result.split('')
            .reverse()
            .join('');
        return `Adapter: (TRANSLATED) ${resultAdapter}`;
    }
}
function CodeClient(target) {
    console.log(target.request());
}
const target = new Target();
CodeClient(target);
const adaptee = new Adaptee();
console.log(`Adaptee: ${adaptee.specificRequest()}`);
const adapter = new Adapter(adaptee);
CodeClient(adapter);
