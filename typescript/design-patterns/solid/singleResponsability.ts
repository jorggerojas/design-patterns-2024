// ANTIPATTERN
// class Multifuncional {
//   constructor() {}

//   printContent(text: string): void {
//     console.log(text);
//   }

//   scanImage() {
//     console.log("Scanning image");
//   }
// }

class Printer {
  static printContent(text: string): void {
    console.log(text);
  }
}

class Scanner {
  static scanImage(): void {
    console.log("Scanning Image...");
  }
}

class Multifuncional {
  static print(text: string): void {
    Printer.printContent(text);
  }
  static scanImage(): void {
    Scanner.scanImage();
  }
}

Multifuncional.print("hola");
Multifuncional.scanImage();
