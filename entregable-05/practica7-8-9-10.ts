abstract class FiguraGeometrica {
   abstract calcularArea(): number;
   abstract calcularPerimetro(): number;
}

class RectangleA implements FiguraGeometrica {
    ancho: number;
    alto: number;

    constructor(ancho: number, alto: number) {
        this.ancho = ancho;
        this.alto = alto;
    }

    calcularArea(): number {
        return (this.ancho * this.alto);
    }
    calcularPerimetro(): number {
        return (this.ancho * 2) + (this.alto * 2);
    }

}

class CircleA implements FiguraGeometrica {
    radio: number;

    constructor(radio: number) {
        this.radio = radio;
    }

    calcularArea(): number {
        return ((this.radio**2)* 3.14);
    }
    calcularPerimetro(): number {
        return (2 * this.radio * 3.14);
    }
}

function mostrarResultado(figura: FiguraGeometrica) {
    console.log('El area de la figura es: ', figura.calcularArea(), 
    '\nEl perimetro de la figura es: ', figura.calcularPerimetro());
}

const fig1 = new RectangleA(3, 4);
const fig2 = new CircleA(2);

console.log('Para Rectangulo:');
mostrarResultado(fig1);

console.log('\n Para circulo: ')
mostrarResultado(fig2);