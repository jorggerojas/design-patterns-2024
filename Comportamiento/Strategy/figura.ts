/*interface Figura{
    calcular():void;
}

class Triangulo implements Figura{
    calcular(): void {
        
    }

}

class Cuadrado implements Figura{
    calcular(): void {
        
    }

}

class Circulo implements Figura{
    calcular(): void {
        
    }

}

class Trapecio implements Figura{
    calcular(): void {
        
    }

}

class FiguraCalcular{
    figuraCalcular:Figura;
    constructor(figura:Figura){
        this.figuraCalcular=figura;
    }

    chooseFigura():void{
        this.figuraCalcular.calcular()
    }


}

class FiguraMain {

    static figuraSelected: Figura;

    static main(mode : string):void{

        const modes:{[key:string]:Figura}={
            'triangulo': new Triangulo(),
            'cuadrado': new Cuadrado(),
            'circulo' : new Circulo(),
        };

        const modeSelected = modes[mode];
        TransportMain.selectTransport(modes[mode]);
    }

    static selectTransport(strategyMode:Figura){
        this.figuraSelected = strategyMode;
        const transportContext = new TransportContext(strategyMode);
        transportContext.chooseFigura;
    }

    static createRoute(a:string,b:string){
        const transport = this.FiguraSelected;
    }
}

TransportMain.main('bus');

TransportMain.createRoute('QRO','CDMX');
*/