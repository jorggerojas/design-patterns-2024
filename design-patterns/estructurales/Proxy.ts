interface Subject {
    request(): void;
}

class RealSubject implements Subject {
    request(): void {
        console.log("RealSubject: request no implementado");
    }
}

class ProxyClass implements Subject {
    private realSubject: RealSubject;

    constructor(realSubject: RealSubject) {
        this.realSubject = realSubject;
    }

    request(): void {
        if (this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }else{
            console.log('Proxy: Petición bloqueada')
        }
    }

    private checkAccess(): boolean {
        console.log('Proxy: Comprobando acceso');
        return false;
    }

    private logAccess(): void {
        console.log('ProxyClass logging request');
    }
}

function clientCode(subject: Subject) {
    subject.request();
}

const realSubject = new RealSubject();
clientCode(realSubject);

const proxy = new ProxyClass(realSubject);
clientCode(proxy);

