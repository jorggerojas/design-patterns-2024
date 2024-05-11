interface FiguraGeometrica {
    calcularArea(): number;
}

// Clase definir figuras
class Triangulo implements FiguraGeometrica {
    constructor(private base: number, private altura: number) {}
    calcularArea(): number {
        return (this.base * this.altura) / 2;
    }
}

class Circulo implements FiguraGeometrica {
    constructor(private radio: number) {}
    calcularArea(): number {
        return Math.PI * this.radio ** 2;
    }
}

//Su ace´ta figuras geometricas
class Calculadora {
    calcularArea(figura: FiguraGeometrica): number {
        return figura.calcularArea();
    }
}

// Ejemplo de uso
const calculador = new Calculadora();
const triangulo = new Triangulo(5, 8);
const circulo = new Circulo(4);

console.log('Área del triángulo:', calculador.calcularArea(triangulo));
console.log('Área del círculo:', calculador.calcularArea(circulo));
