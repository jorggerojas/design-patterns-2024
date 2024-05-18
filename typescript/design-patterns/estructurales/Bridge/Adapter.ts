class Target {
  public request(): string {
    return "Targe: Defatult Targe.";
  }
}

class Adaptee {
  public specificRequest(): string {
    return "sodot a aloH";
  }
}

class Adapter extends Target {
  constructor(private adaptee: Adaptee) {
    super();
    this.adaptee = adaptee;
  }

  public request(): string {
    const result = this.adaptee.specificRequest();

    const resultAdapter = result.split("").reverse().join("");
    return `Adapter: (Traducción) ${resultAdapter}`;
  }
}

function clientCode2(target: Target) {
  console.log(target.request());
}

const target = new Target();
clientCode2(target);

const adaptee = new Adaptee();
console.log(`Adaptee ${adaptee.specificRequest()}`);

const adapter = new Adapter(adaptee);
clientCode2(adapter);
