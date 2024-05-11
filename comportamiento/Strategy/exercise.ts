import * as readlineSync from 'readline-sync';

//Inicializacion de la interfaz
interface AreaCalculationStrategy {
    calculateArea(...params: any[]): number;
}

//Definir los casos de strategy que vamos a manejar y la lógica de cada uno

class TriangleAreaCalculator implements AreaCalculationStrategy {
    calculateArea(base: number, height: number): number {
        return 0.5 * base * height;
    }
}

class CircleAreaCalculator implements AreaCalculationStrategy {
    calculateArea(radius: number): number {
        return Math.PI * radius ** 2;
    }
}

class SquareAreaCalculator implements AreaCalculationStrategy {
    calculateArea(side: number): number {
        return side ** 2;
    }
}

class RectangleAreaCalculator implements AreaCalculationStrategy {
    calculateArea(length: number, width: number): number {
        return length * width;
    }
}

class PentagonAreaCalculator implements AreaCalculationStrategy {
    calculateArea(side: number): number {
        return 0.25 * Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * side ** 2;
    }
}

//Crear el contexto de la forma con la que vamos a trabajar y regresar el strategy que vamos a utilizar mediante los params del teclado

class AreaContext {
    areaCalculationStrategy: AreaCalculationStrategy;

    constructor(strategy: AreaCalculationStrategy) {
        this.areaCalculationStrategy = strategy;
    }

    setAreaCalculationStrategy(strategy: AreaCalculationStrategy): void {
        this.areaCalculationStrategy = strategy;
    }

    calculateArea(...params: any[]): number {
        return this.areaCalculationStrategy.calculateArea(...params);
    }
}

//MAIN gestionamos la selección de la estrategia de cálculo de área basada en la figura ingresada por el usuario y solicitamos los parámetros necesarios.


class AreaMain {
    static areaCalculator: AreaCalculationStrategy;

    static main(): void {
        const shape = readlineSync.question('Ingrese la figura deseada entre triangulo, circulo, cuadrado, rectangulo o pentagono: ');

        const calculators: {[key: string]: AreaCalculationStrategy} = {
            'triangulo': new TriangleAreaCalculator(),
            'circulo': new CircleAreaCalculator(),
            'cuadrado': new SquareAreaCalculator(),
            'rectangulo': new RectangleAreaCalculator(),
            'pentagono': new PentagonAreaCalculator(),
        };

        const calculatorSelected = calculators[shape];
        if (!calculatorSelected) {
            console.log('Figura no válida.');
            return;
        }

        let params: any[] = [];
        switch (shape) {
            case 'triangulo':
                params.push(parseFloat(readlineSync.question('Ingrese la base del triangulo: ')));
                params.push(parseFloat(readlineSync.question('Ingrese la altura del triangulo: ')));
                break;
            case 'circulo':
                params.push(parseFloat(readlineSync.question('Ingrese el radio del circulo: ')));
                break;
            case 'cuadrado':
                params.push(parseFloat(readlineSync.question('Ingrese el lado del cuadrado: ')));
                break;
            case 'rectangulo':
                params.push(parseFloat(readlineSync.question('Ingrese la longitud del rectangulo: ')));
                params.push(parseFloat(readlineSync.question('Ingrese el ancho del rectangulo: ')));
                break;
            case 'pentagono':
                params.push(parseFloat(readlineSync.question('Ingrese la longitud de un lado del pentagono: ')));
                break;

        }

        AreaMain.selectAreaCalculator(calculatorSelected, params);
    }

    //Impimir el resultado

    static selectAreaCalculator(strategy: AreaCalculationStrategy, params: any[]): void {
        this.areaCalculator = strategy;
        const areaContext = new AreaContext(strategy);
        const area = areaContext.calculateArea(...params);
        console.log(`Area de la figura: ${area}`);
    }
}

// Ejemplo de uso
AreaMain.main();
