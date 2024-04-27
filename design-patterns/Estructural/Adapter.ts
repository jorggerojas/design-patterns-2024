/* Para convertir un archivo a otro para su analisis*/

class Target{
    public request(): string{
        return `Target: Default Targe.`;
    }
}

class Adaptee{
    public specificRequest(): string {
        return 'sodot a aloh';
    }
}

class Adapter extends Target {
    constructor(private adaptee: Adaptee){
        super();
        this.adaptee = adaptee;
    }

    public request(): string {
        const result = this.adaptee.specificRequest();

        const resultAdapted = result
            .split('')
            .reverse()
            .join('');

        return `Adapter: (Traduccion) ${resultAdapted}`;
    }
}

function ClientCode(target: Target){
    console.log(target.request());
}

const target = new Target();
ClientCode(target);

const adaptee = new Adaptee();
console.log(`Adaptee ${adaptee.specificRequest()}`);

const adapter = new Adapter(adaptee);
console.log(adapter);