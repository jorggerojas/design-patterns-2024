import FiguraGeometrica from './FiguraGeometrica';

class Circulo extends FiguraGeometrica {
    constructor(public radio: number) {
        super();
    }

    calcularArea(): number {
        return Math.PI * this.radio ** 2;
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.radio;
    }
}

export default Circulo;

