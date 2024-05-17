// La clase Target define la interfaz que el cliente utiliza.
class Target {
    public request(): string {
        return 'Target: Default Target.';
    }
}

// La clase Adaptee contiene una funcionalidad útil, pero su interfaz no es compatible con Target.
class Adaptee {
    public specificRequest(): string {
        return 'sodot a aloH';
    }
}

// La clase Adapter hace que la interfaz de Adaptee sea compatible con la interfaz de Target.
class Adapter extends Target {
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        super();
        this.adaptee = adaptee;
    }

    public request(): string {
        const result = this.adaptee.specificRequest();
        const resultAdapted = result.split('').reverse().join('');
        return `Adapter: (Traducción) ${resultAdapted};`;
    }
}

// El código del cliente puede trabajar con cualquier objeto que siga la interfaz Target.
function clientCodeAdapter(target: Target) {
    console.log(target.request());
}

// Uso del Target
const target = new Target();
clientCodeAdapter(target);

// Uso del Adaptee sin adaptar (demostración)
const adaptee = new Adaptee();
console.log(`Adaptee: ${adaptee.specificRequest()}`);

// Uso del Adapter para hacer que Adaptee sea compatible con Target
const adapter = new Adapter(adaptee);
clientCodeAdapter(adapter);
