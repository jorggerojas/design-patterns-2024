"use strict";
class ReadSubject {
    request() {
        console.log('RealSubject: Handling request');
    }
}
class ProxyClass {
    constructor(realSubject) {
        this.realSubject = realSubject;
    }
    request() {
        if (this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }
        else {
            console.log('ProxyClass: no tiene accesos');
        }
    }
    checkAccess() {
        console.log('ProxyClass: Realize comprobaciones');
        return true;
    }
    logAccess() {
        console.log('ProxyClass Loggin request');
    }
}
function clientsCodes(subject) {
    subject.request();
}
const realSubject = new ReadSubject();
clientsCodes(realSubject);
const proxy = new ProxyClass(realSubject);
clientsCodes(proxy);
