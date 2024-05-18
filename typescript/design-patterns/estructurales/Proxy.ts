interface Subject {
  request(): void;
}

class ReadSubject implements Subject {
  request(): void {
    console.log("RealSubject: ");
  }
}

class ProxyClass implements Subject {
  private realSubject: ReadSubject;

  constructor(realSubject: ReadSubject) {
    this.realSubject = realSubject;
  }

  request(): void {
    if (this.checkAccess()) {
      this.realSubject.request();
      this.logAccess();
    } else {
      console.log("No tiene acceso a la clase");
    }
  }

  private checkAccess(): boolean {
    console.log("ProxyClass: Realize comprobaciones");
    return true;
  }

  private logAccess(): void {
    console.log("ProxyClass Logging Request");
  }
}

function clientCode22(subject: Subject) {
  subject.request();
}

const realSubject = new ReadSubject();
clientCode22(realSubject);

const proxy = new ProxyClass(realSubject);
clientCode22(proxy);
