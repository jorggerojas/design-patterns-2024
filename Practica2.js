class Rectangulo{
    constructor(width, height){
        //width=ancho  height=alto
        this.width = width;
        this.height = height;
    }
    areaCalculator(){
        return this.width*this.height;
    }
    perimeterCalculator(){
        return 2*(this.width+this.height);
    }
}

class Circulo{
    constructor(radio){
        this.radio = radio;
    }
    areaCalculator(){
        return Math.PI*this.radio*this.radio;
    }
    circumferenceCalculator(){
        return 2*Math.PI*this.radio;
    }
}

class FiguraGeometrica{
    /*
    constructor(){
        if(this.constructor === FiguraGeometrica){
            //preguntar si es console.log o throw new Error
            console.log("No se puede instanciar una clase abstracta");
        }
    }
    areaCalculator(){
        console
    }
    */
}

function calculateData(figura){
    console.log("Área: ", figura.areaCalculator());
    console.log("Perímetro: ", figura.perimeterCalculator());
}