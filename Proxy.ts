interface Subject{
    request(): void;
}

class ReadSubject implements Subject{
    request(): void {
        console.log('RealSubject: Handling request.');
    }

}

class ProxyClass implements Subject{
    private realSubject: ReadSubject;

    constructor(realSubject: ReadSubject){
        this.realSubject = realSubject;
    }

    request(): void {
        if(this.checkAccess()){
            this.realSubject.request();
            this.logAccess();
        } else {
            console.log("ProxyClass: No tiene accesos.")
        }
    }

    private checkAccess(): boolean{
        console.log('ProxyClass Hace comprobaciones');

        return false;
    }

    private logAccess(): void{
        console.log('ProxyClass Logging request');
    }
    
}

function clientCode(subject: Subject){
    subject.request();
}

const realSubject = new ReadSubject();
clientCode(realSubject);

const proxy = new ProxyClass(realSubject);
clientCode(proxy);