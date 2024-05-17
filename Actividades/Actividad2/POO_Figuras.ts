abstract class FiguraGeometrica {
    abstract calcularArea(): number;
    abstract calcularPerimetro(): number;
}

class Rectangulo extends FiguraGeometrica {
    ancho: number;
    alto: number;

    constructor(ancho: number, alto: number) {
        super();
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

class Circulo extends FiguraGeometrica {
    radio: number;

    constructor(radio: number) {
        super();
        this.radio = radio;
    }

    calcularArea(): number {
        return Math.PI * this.radio * this.radio;
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.radio;
    }
}

function calcular(f: FiguraGeometrica): void {
    console.log(`Área: ${f.calcularArea()}`);
    console.log(`Perímetro: ${f.calcularPerimetro()}`);
}

// Ejemplo de uso
const rectangulo = new Rectangulo(5, 10);
const circulo = new Circulo(5);

calcular(rectangulo);
calcular(circulo);
