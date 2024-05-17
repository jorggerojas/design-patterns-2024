// La interfaz Subject declara operaciones que tanto el RealSubject como el Proxy pueden implementar.
interface Subject {
    request(): void;
}

// El RealSubject contiene la lógica de negocio principal.
class RealSubject implements Subject {
    public request(): void {
        console.log('RealSubject: Handling request.');
    }
}

// El Proxy tiene una referencia al RealSubject y puede controlar el acceso a él.
class ProxySubject implements Subject {
    private realSubject: RealSubject;

    constructor(realSubject: RealSubject) {
        this.realSubject = realSubject;
    }

    public request(): void {
        if (this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }
    }

    private checkAccess(): boolean {
        // Aquí podrías implementar un control de acceso real.
        console.log('Proxy: Checking access prior to firing a real request.');
        return true;
    }

    private logAccess(): void {
        console.log('Proxy: Logging the time of request.');
    }
}

// Código del cliente que trabaja con objetos a través de la interfaz Subject.
function clientCode(subject: Subject) {
    subject.request();
}

// Uso del RealSubject directamente.
console.log('Client: Executing the client code with a real subject:');
const realSubject = new RealSubject();
clientCode(realSubject);

// Uso del Proxy que controla el acceso al RealSubject.
console.log('Client: Executing the same client code with a proxy:');
const proxy = new ProxySubject(realSubject);
clientCode(proxy);
