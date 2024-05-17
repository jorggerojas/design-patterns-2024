// 7. Clase Rectángulo
class Rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }

    calcularArea() {
        return this.ancho * this.alto;
    }

    calcularPerimetro() {
        return 2 * (this.ancho + this.alto);
    }
}

// 8. Clase Círculo
class Circulo {
    constructor(radio) {
        this.radio = radio;
    }

    calcularArea() {
        return Math.PI * Math.pow(this.radio, 2);
    }

    calcularCircunferencia() {
        return 2 * Math.PI * this.radio;
    }
}

// 9. Clase FiguraGeometrica y subclases
class FiguraGeometrica {
    calcularArea() {
        throw new Error("Método 'calcularArea' no implementado");
    }

    calcularPerimetro() {
        throw new Error("Método 'calcularPerimetro' no implementado");
    }
}

class RectanguloFG extends FiguraGeometrica {
    constructor(ancho, alto) {
        super();
        this.ancho = ancho;
        this.alto = alto;
    }

    calcularArea() {
        return this.ancho * this.alto;
    }

    calcularPerimetro() {
        return 2 * (this.ancho + this.alto);
    }
}

class CirculoFG extends FiguraGeometrica {
    constructor(radio) {
        super();
        this.radio = radio;
    }

    calcularArea() {
        return Math.PI * Math.pow(this.radio, 2);
    }

    calcularPerimetro() {
        return 2 * Math.PI * this.radio;
    }
}

// 10. Función que utiliza polimorfismo
function imprimirDetallesFigura(figura) {
    console.log(`Área: ${figura.calcularArea()}, Perímetro: ${figura.calcularPerimetro()}`);
}

// Uso de la función
let rectangulo = new RectanguloFG(5, 10);
let circulo = new CirculoFG(7);

imprimirDetallesFigura(rectangulo);
imprimirDetallesFigura(circulo);