
//atributo comun en todas las clases
interface ShapeStrategy{
    selectShape(): void;
    calculateArea(a: number, b: number | null): number;
}

class Triangle implements ShapeStrategy {
    calculateArea(a: number, b: number): number {
        return (a * b) / 2; 
    }
    selectShape(): void {
        console.log('Triangle');
    }
}

class Circle implements ShapeStrategy {
    calculateArea(a: number, b: null): number {
        return ((a**2)* 3.14);
    }
    selectShape(): void {
        console.log('Circle');
    }
}

class Square implements ShapeStrategy {
    calculateArea(a: number, b: null): number {
        return (a**2);
    }
    selectShape(): void {
        console.log('Square');
    }
}

class Rectangle implements ShapeStrategy {
    calculateArea(a: number, b: number): number {
        return (a*b);
    }
    selectShape(): void {
        console.log('Rectangle');
    }
}

class Diamond implements ShapeStrategy {
    calculateArea(a: number, b: number): number {
        return (a*b)/2;
    }
    selectShape(): void {
        console.log('Diamond');
    }

}

class ShapeContext {
    ShapeStrategy!: ShapeStrategy;

    constructor(strategy: ShapeStrategy){
        this.ShapeStrategy = strategy;
    }

    chooseShape(): void {
        this.ShapeStrategy.selectShape();
    }
}

class MainShape {
    static ShapeSelected : ShapeStrategy;

    static main(mode : string) : void { //efectua la seleccion de la figura
        const modes : {[key : string] : ShapeStrategy} = {
            'triangle' : new Triangle(),
            'circle' : new Circle(),
            'square' : new Square(),
            'rectangle' : new Rectangle(),
            'diamond' : new Diamond()
        }

        MainShape.selectShape(modes[mode]);
    }

    static selectShape(strategyMode: ShapeStrategy) {
        this.ShapeSelected = strategyMode;

        const shapeContext = new ShapeContext(strategyMode);
        shapeContext.chooseShape();
    }
    static calculateArea(a: number, b: number | null){
        const shape = this.ShapeSelected; //ejecuta el calculo de area en base a la figura
        console.log('The area is: ', shape.calculateArea(a, b), "\n");
    }
}

MainShape.main('triangle');
MainShape.calculateArea(7, 5);

MainShape.main('circle');
MainShape.calculateArea(2, null);

MainShape.main('square');
MainShape.calculateArea(6, null);

MainShape.main('rectangle');
MainShape.calculateArea(5, 3);

MainShape.main('diamond');
MainShape.calculateArea(7, 2);