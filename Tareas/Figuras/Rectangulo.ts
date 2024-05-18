import FiguraGeometrica from './FiguraGeometrica';

class Rectangulo extends FiguraGeometrica {
    constructor(public ancho: number, public alto: number) {
        super();
    }

    calcularArea(): number {
        return this.ancho * this.alto;
    }

    calcularPerimetro(): number {
        return 2 * (this.ancho + this.alto);
    }
}

export default Rectangulo;
