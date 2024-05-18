// Definir la interfaz para las estrategias de cálculo de área
interface AreaCalculable {
    calcularArea(): number;
}

// Implementar clases concretas para cada forma geométrica

class Triangulo implements AreaCalculable {
    private base: number;
    private altura: number;

    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }

    calcularArea(): number {
        return (this.base * this.altura) / 2;
    }
}

class Circulo implements AreaCalculable {
    private radio: number;

    constructor(radio: number) {
        this.radio = radio;
    }

    calcularArea(): number {
        return Math.PI * Math.pow(this.radio, 2);
    }
}

class Cuadrado implements AreaCalculable {
    private lado: number;

    constructor(lado: number) {
        this.lado = lado;
    }

    calcularArea(): number {
        return Math.pow(this.lado, 2);
    }
}

class Rectangulo implements AreaCalculable {
    private base: number;
    private altura: number;

    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }

    calcularArea(): number {
        return this.base * this.altura;
    }
}

class Trapecio implements AreaCalculable {
    private baseMayor: number;
    private baseMenor: number;
    private altura: number;

    constructor(baseMayor: number, baseMenor: number, altura: number) {
        this.baseMayor = baseMayor;
        this.baseMenor = baseMenor;
        this.altura = altura;
    }

    calcularArea(): number {
        return ((this.baseMayor + this.baseMenor) * this.altura) / 2;
    }
}

// Crear una clase Contexto que utilizará la estrategia apropiada según la forma proporcionada

class CalculadoraArea {
    private estrategia: AreaCalculable;

    constructor(estrategia: AreaCalculable) {
        this.estrategia = estrategia;
    }

    setEstrategia(estrategia: AreaCalculable) {
        this.estrategia = estrategia;
    }

    calcularArea(): number {
        return this.estrategia.calcularArea();
    }
}

// Ejemplo de uso

const triangulo = new Triangulo(5, 3);
const circulo = new Circulo(4);
const cuadrado = new Cuadrado(5);
const rectangulo = new Rectangulo(4, 6);
const trapecio = new Trapecio(4, 6, 3);

const calculadora1 = new CalculadoraArea(triangulo);
console.log("Área del triángulo:", calculadora1.calcularArea());

calculadora1.setEstrategia(circulo);
console.log("Área del círculo:", calculadora1.calcularArea());

calculadora1.setEstrategia(cuadrado);
console.log("Área del cuadrado:", calculadora1.calcularArea());

calculadora1.setEstrategia(rectangulo);
console.log("Área del rectángulo:", calculadora1.calcularArea());

calculadora1.setEstrategia(trapecio);
console.log("Área del trapecio:", calculadora1.calcularArea());