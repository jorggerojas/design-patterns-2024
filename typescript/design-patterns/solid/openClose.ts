abstract class Carro {
  abstract precio(): number;
}

class Audi extends Carro {
  precio(): number {
    return 10;
  }
}

class Lambo extends Carro {
  precio(): number {
    return 1000;
  }
}
