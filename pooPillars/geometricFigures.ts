// Rectangle
class Rectangulo {
    private ancho: number;
    private alto: number;

    constructor(ancho: number, alto: number) {
        this.ancho = ancho;
        this.alto = alto;
    }

    calcularArea(): number {
        return this.ancho * this.alto;
    }

    calcularPerimetro(): number {
        return 2 * (this.ancho + this.alto);
    }
}

// Circle
class Circulo {
    private radio: number;

    constructor(radio: number) {
        this.radio = radio;
    }

    calcularArea(): number {
        return Math.PI * this.radio * this.radio;
    }

    calcularCircunferencia(): number {
        return 2 * Math.PI * this.radio;
    }
}

// Clase abstracta 
abstract class FiguraGeometrica {
    abstract calcularArea(): number; 
    abstract calcularPerimetro(): number; 
}

// Implementación de la subclase
class subRectangulo extends FiguraGeometrica {
    constructor(private ancho: number, private alto: number) {
        super();
    }

    calcularArea(): number {
        return this.ancho * this.alto;
    }

    calcularPerimetro(): number {
        return 2 * (this.ancho + this.alto);
    }
}

// Implementación de la subclase 
class subCirculo extends FiguraGeometrica {
    constructor(private radio: number) {
        super();
    }

    calcularArea(): number {
        return Math.PI * this.radio * this.radio;
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.radio;
    }
}

// Polimorfismo
function imprimirDetallesFigura(figura: FiguraGeometrica): void {
    console.log("Área:", figura.calcularArea()); 
    console.log("Perímetro:", figura.calcularPerimetro()); 
    console.log(); 
}

// Ejemplo de uso
const rectangulo = new subRectangulo(5, 3);
const circulo = new subCirculo(5);

console.log("Métodos de la clase rectángulo: ")
imprimirDetallesFigura(rectangulo);

console.log("Métodos de la clase círculo: ")
imprimirDetallesFigura(circulo);

