import { FiguraGeométrica } from "./FiguraGeometrica";

export class Rectangulo extends FiguraGeométrica {
  private base: number;
  private altura: number;
  public constructor(base: number, altura: number) {
    super();
    this.base = base;
    this.altura = altura;
  }
  public calcularArea(): number {
    return this.base * this.altura;
  }
  public calcularPerímetro(): number {
    return this.base * 2 + this.altura * 2;
  }
}
