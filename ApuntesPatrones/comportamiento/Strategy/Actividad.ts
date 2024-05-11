// Definir la interfaz para las estrategias de cálculo de área
interface AreaCalculable {
    calcularArea(): number;
}

// Implementar clases concretas para cada forma geométrica

class Triangle implements AreaCalculable {
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

class Circle implements AreaCalculable {
    private radio: number;

    constructor(radio: number) {
        this.radio = radio;
    }

    calcularArea(): number {
        return Math.PI * this.radio * this.radio;
    }
}

class Square implements AreaCalculable {
    private lado: number;

    constructor(lado: number) {
        this.lado = lado;
    }

    calcularArea(): number {
        return this.lado * this.lado;
    }
}

class Rectangle implements AreaCalculable {
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

class Trapezoid implements AreaCalculable {
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

class AreaCalculator {
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

const triangulo1 = new Triangle(5, 3);
const circulo1 = new Circle(4);
const cuadrado = new Square(5);
const rectangulo = new Rectangle(4, 6);
const trapecio = new Trapezoid(4, 6, 3);

const calculadora1 = new AreaCalculator(triangulo);
console.log("Área del triángulo:", calculadora1.calcularArea());

calculadora1.setEstrategia(circulo1);
console.log("Área del círculo:", calculadora1.calcularArea());

calculadora1.setEstrategia(cuadrado);
console.log("Área del cuadrado:", calculadora1.calcularArea());

calculadora1.setEstrategia(rectangulo);
console.log("Área del rectángulo:", calculadora1.calcularArea());

calculadora1.setEstrategia(trapecio);
console.log("Área del trapecio:", calculadora1.calcularArea());
