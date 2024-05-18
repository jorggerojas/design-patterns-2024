interface areas {
    resolverArea(x: number, y: number): number;
    selectArea(): void;
}

class triangulo implements areas{
    public resolverArea(h: number, b: number): number{
        return (h * b / 2)
    }
    selectArea(): void{
        throw new Error ("Method not implemented.")
    }
}
class circulo implements areas{
    public resolverArea(r: number, pi: number): number{
        return (r*r*pi)
    }
    selectArea(): void{
        throw new Error ("Method not implemented.")
    }
}
class cuadrado implements areas{
    public resolverArea(b: number, h: number): number{
        return (h * b)
    }
    selectArea(): void{
        throw new Error ("Method not implemented.")
    }
}
class rectangulo implements areas{
    public resolverArea(b: number, h: number): number{
        return (h * b)
    }
    selectArea(): void{
        throw new Error ("Method not implemented.")
    }
}
class trapecio implements areas{
    public resolverArea(b: number, h: number): number{
        return (h * b / 2)
    }
    selectArea(): void{
        throw new Error ("Method not implemented.")
    }
}

class AreaContext{
    areaStrategy: areas;

    constructor(strategy: areas){
        this.areaStrategy = strategy;
    }

    chooseArea(): void {
        this.areaStrategy.resolverArea(5, 6);
    }
}

class areaMain{
    static areaSelected: areas;

    static main(mode: string): void{
        const modes = {
            'triangulo': new triangulo(),
            'circulo': new circulo(),
            'cuadrado': new cuadrado(),
            'rectangulo': new rectangulo(),
            'trapecio': new trapecio(),
        };

        areaMain.selectAreas(new circulo());
    }

    static selectAreas(strategyMode: areas) {
        this.areaSelected = strategyMode;
        const areaContext = new AreaContext(strategyMode);
        areaContext.chooseArea();
    }

    static createArea(a: string, b: string){
        const figura = this.areaSelected
    }

    /*private strategt: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }


    public setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    public ResolverArea1(): void{
        const result = this.strategy.doAlgorithm(['a', 'b', 'c', 'd', 'e']);
        console.log(result.join(','));
    }*/
}



areaMain.main('circulo')
