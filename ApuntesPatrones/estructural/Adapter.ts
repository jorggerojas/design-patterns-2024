class Target {
    public request(): string {
        return 'Target: The default target.';
    
    }
}

class Adaptee {
    public specificRequest(): string {
        return 'sodot a aloH';
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

        const resultAdapter = result.split('')
                                .reverse()
                                .join('');

        return `Adapter: (TRANSLATED) ${resultAdapter}`;
    }
}

function CodeClient(target: Target) {
    console.log(target.request());
}

const target = new Target();
CodeClient(target);

const adaptee = new Adaptee();
console.log(`Adaptee: ${adaptee.specificRequest()}`);

const adapter = new Adapter(adaptee);
CodeClient(adapter);