interface FigureArea {
    type: string;
    area(): number;
}

class Triangle implements FigureArea{
    type = 'Triangle';
    
    private base: number;
    private altura: number;

    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }

    area(): number {
        return (this.base * this.altura)/2;
    }
}

class circle implements FigureArea{
    type = 'Circle';
    area(): number {
        throw new Error("Method not implemented.");
    }
}

class square implements FigureArea{
    type = 'Square';
    area(): number {
        throw new Error("Method not implemented.");
    }
}

class rectangle implements FigureArea {
    type = 'Rectangle';
    area(): number {
        throw new Error("Method not implemented.");
    }
}

class diamond implements FigureArea{
    type = 'Diamond';
    area(): number {
        throw new Error("Method not implemented.");
    }
}

class FigureMain{
    static FigureSelected: FigureArea

    static main(figure: string): void{
        const figures: {[key: string]: FigureArea} = {
            //'triangle':  new Triangle(),
            'circle': new circle(),
            'square': new square(),
            'rectangle': new rectangle(),
            'diamond': new diamond()
        }
        
    }
}

