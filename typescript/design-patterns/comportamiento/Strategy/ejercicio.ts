// /*
//   Calcular el área de distintas figuras
//   (Triángulo, Círculo, Cuadrado, Rectángulo)
//   utilizando Strategy
// */

// abstract class Figura {
//   abstract calcular_area(): number;
// }

// class Triangulo extends Figura {
//   base: number;
//   altura: number;

//   constructor(base: number, altura: number) {
//     super();
//     this.base = base;
//     this.altura = altura;
//   }

//   calcular_area(): number {
//     return (this.base * this.altura) / 2;
//   }
// }

// class Circulo extends Figura {
//   radio: number;
//   pi: number = Math.PI;

//   constructor(radio: number) {
//     super();
//     this.radio = radio;
//   }

//   calcular_area(): number {
//     return this.pi * Math.pow(this.radio, 2);
//   }
// }

// class Cuadrado extends Figura {
//   lado: number;

//   constructor(lado: number) {
//     super();
//     this.lado = lado;
//   }

//   calcular_area(): number {
//     return Math.pow(this.lado, 2);
//   }
// }

// class Rectangulo extends Figura {
//   base: number;
//   altura: number;

//   constructor(base: number, altura: number) {
//     super();
//     this.base = base;
//     this.altura = altura;
//   }

//   calcular_area(): number {
//     return this.base * this.altura;
//   }
// }

// class Rombo extends Figura {
//   diagonalMayor: number;
//   diagonalMenor: number;

//   constructor(diagonalMayor: number, diagonalMenor: number) {
//     super();
//     this.diagonalMayor = diagonalMayor;
//     this.diagonalMenor = diagonalMenor;
//   }

//   calcular_area(): number {
//     return (this.diagonalMayor * this.diagonalMenor) / 2;
//   }
// }

// class FigurasMain {
//   static figuraSeleccionada: Figura;

//   static main(mode: string, args: { [key: string]: number }): void {
//     const modes: { [key: string]: Figura } = {
//       triangulo: new Triangulo(args.base, args.altura),
//       circulo: new Circulo(args.radio),
//       cuadrado: new Cuadrado(args.lado),
//       rectangulo: new Rectangulo(args.base, args.altura),
//       rombo: new Rombo(args.diagonalMayor, args.diagonalMayor),
//     };

//     this.figuraSeleccionada = modes[mode];
//   }

//   static calcular_area(): number {
//     const figura = this.figuraSeleccionada;
//     return figura.calcular_area();
//     // Calcular el destino de transporte
//   }
// }

// FigurasMain.main("triangulo", { base: 9, altura: 10 });
// console.log(FigurasMain.calcular_area());

// FigurasMain.main("circulo", { radio: 5 });
// console.log(FigurasMain.calcular_area());

// FigurasMain.main("cuadrado", { lado: 5 });
// console.log(FigurasMain.calcular_area());

// FigurasMain.main("rectangulo", { base: 5, altura: 5 });
// console.log(FigurasMain.calcular_area());

// FigurasMain.main("rombo", { diagonalMayor: 20, diagonalMenor: 10 });
// console.log(FigurasMain.calcular_area());
