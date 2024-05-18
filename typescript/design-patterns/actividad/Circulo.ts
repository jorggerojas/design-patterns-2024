import { FiguraGeométrica } from "./FiguraGeometrica";

export class Circulo extends FiguraGeométrica {
  private radio: number;
  public constructor(radio: number) {
    super();
    this.radio = radio;
  }
  public calcularArea(): number {
    return Math.PI * Math.pow(this.radio, 2);
  }
  public calcularPerímetro(): number {
    return 2 * Math.PI * this.radio;
  }
}
