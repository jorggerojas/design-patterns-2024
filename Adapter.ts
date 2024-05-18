class Target {
    public request(): string {
        return 'Target: default Target.';
    }
}

class Adaptee {
    public specificRequest(): string {
        return 'sodot a aloH'
    }
}

class Adapter extends Target {

    constructor(
        private adaptee: Adaptee
    ) {
        super();
        this.adaptee = adaptee;
    }

    public request(): string {
        const result = this.adaptee.specificRequest();

        const resultAdapted = result.split('').reverse().join('');

        return `Adapter: (Traduccion)${resultAdapted};`;
    }
}
    // @ts-ignore
function clientCode(target: Target) {
    console.log(target.request());
}

const target = new Target();
clientCode(target);

const adaptee = new Adaptee();
console.log(`Adaptee ${adaptee.specificRequest()}`);

const adapter = new Adapter(adaptee);
clientCode(adapter);