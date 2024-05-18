interface IAve {
  comer(): void;
}
interface IAveVoladora {
  volar(): void;
}

interface IAveNadadora {
  nadar(): void;
}

class Loro implements IAve, IAveVoladora {
  public volar() {
    //...
  }

  public comer() {
    //...
  }
}

class Pinguino implements IAve, IAveNadadora {
  public nadar() {
    //...
  }

  public comer() {
    //...
  }
}
