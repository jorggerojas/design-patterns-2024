abstract class Ave {
    abstract mover(): void;
}

class Pato extends Ave {
    mover(): void {
        console.log("El pato nada y vuela");
    }
}

class Avestruz extends Ave {
    mover(): void {
        console.log("El avestruz corre");
    }
}

// Ejemplo de uso
let miAve: Ave;

miAve = new Pato();
miAve.mover(); // Salida: El pato nada y vuela

miAve = new Avestruz();
miAve.mover(); // Salida: El avestruz corre
