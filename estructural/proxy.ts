interface Subject{
    request(): void;
}

class ReadSubject implements Subject{
    request(): void {
        throw new Error("Method not implemented.");
    }
    
}

class ProxyClass implements Subject{
    private realSubject: ReadSubject;
    constructor(realSubject:ReadSubject){
        this.realSubject=realSubject;
    }
    request(): void {
        if(this.checkAccess()){
            this.realSubject.request();
            this.logAccess();
        }
    }
    
    private checkAccess(): boolean {
        console.log('Proxy Class: Realize comprobaciones');
        return true;
    }
    
    logAccess() {
        console.log('Proxy Class loging Request');
    }
}



function clientCode(subject:Subject){
    subject.request();
}

