interface Subject { 
    request(): void;
}

class ReadSubject implements Subject {
    request(): void {
       console.log('ReadSubject: Handling request.')
    }
}

class ProxyClass implements Subject {
    private realSubject: ReadSubject;

    constructor(realSubject: ReadSubject) {
        this.realSubject = realSubject;
    }

    request(): void {
        if(this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }else console.log('Proxy: Access denied.');
    }

    private checkAccess(): boolean {
        console.log('ProxyClass: Reaclizando comprobaciones previas.');
        return true;
    }

    private logAccess(): void {
        console.log('Proxy: Logging the time of request.');
    }
}

function clientCode(subject: Subject) {
    subject.request();
}


const realSubject = new ReadSubject();
clientCode(realSubject);

const proxy = new ProxyClass(realSubject);
clientCode(proxy);