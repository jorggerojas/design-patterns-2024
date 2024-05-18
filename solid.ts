
//Principio de Responsabilidad Unica
class CalculoIVA{
    calcularIVA(){
        console.log("Calculando IVA...");
    }
}

class CalculoISR{
    calcularISR(){
        console.log("Calculando ISR...");
    }
}

//Principio de abierto/cerrado

class TV{
    mirar(){
        console.log("Mirando TV...");        
    }
}

class TVHD extends TV{
    mirar(){
        console.log("Aumentando Calidad de Video...");
        super.mirar();       
    }
}
//Principio de Sustiticion de Liskov

class Felinos{
    rugir(){
        console.log("Rugiendo");
    }

    maullar(){
        console.log("Maullando");
    }
}

class Leon extends Felinos{
    rugir(){
        console.log("Rugiendo");
    }
    maullar(){
        console.log("Los leones no pueden maullar");
    }
}

class Gato extends Felinos{
    rugir(){
        console.log("Los gatos no pueden rugir");
    }
    maullar(){
        console.log("Maullando");
    }

}

//Principio de Segregacion de interfaces

class EncenderPc{
    encender(){
        console.log("Encendiendo PC"); 
    }
}

class TrabajarenPC{
    trabajando(){
        console.log("Trabajando en el PC");
    }
}

class ApagarPC{
    apagar(){
        console.log("Apagando PC");
    }
}

//Principio de Inversion de dependencia

class materia{
    calificacion(){
        console.log("Calculando Calificacion");
    }
}

class Semestre{
    materia:materia;
    constructor (materia:materia){
        this.materia = materia;
    }

    promedio(){
        console.log("Calculando Promedio");
    }
}